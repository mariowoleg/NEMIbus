import { booleanAttribute, Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupServiceService } from '../../services/popup-service.service';
import { PostsService } from '../../services/posts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bus-popup',
  standalone: true,
  imports: [MapComponent, MatDialogModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './bus-popup.component.html',
  styleUrl: './bus-popup.component.css'
})
export class BusPopupComponent implements OnInit, OnDestroy{
  lat: number = 41.390205;
  lng: number = 2.154007;
  serviceForm: FormGroup = new FormGroup('');

  constructor(public dialogRef: MatDialogRef<BusPopupComponent>,
              private popupservice: PopupServiceService,
              private postsService: PostsService){}


    ngOnInit(): void {
      this.serviceForm = new FormGroup({
        id: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        area: new FormControl('', [Validators.required]),
        client: new FormControl('', [Validators.required]),
        time: new FormControl('', [Validators.required, Validators.pattern('^[0-5][0-9]:[0-5][0-9]$')]),
        active: new FormControl(false),
        latitude: new FormControl('', [Validators.required]),
        longitude: new FormControl('', [Validators.required]),
      });

      this.popupservice.OBSlatlng.subscribe((coords => {
        this.lat = coords.lat;
        this.lng = coords.lng;
      }))
    }

    onSubmit(): void {
      this.postsService.addPost(this.serviceForm.value);
      this.closeDialog();
    }

    onChangeInput(): void{
      if(this.isCoordValid(this.lat) && this.isCoordValid(this.lng)){
        this.popupservice.setLatLng(this.lat, this.lng);
      }
    }

    onChangeName(): void{
      const name = this.serviceForm.get("name")?.value;
      this.popupservice.setName(name)
    }

    //Funció generada per IA
    formatTime(event: Event) {
      const input = event.target as HTMLInputElement;
      let value = input.value.replace(/[^0-9]/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + ':' + value.slice(2);
      }
    
      input.value = value;
      this.serviceForm.get('time')?.setValue(value);
    }

    //Approach: Cada cop que els camps lat/lng canviïn, el mapa es recentra. 
    //--->Quan l'usuari escrigui un "." o "," o "-", volem controlar-ho per a que no peti el programa.
    isCoordValid(param: number): boolean{
      return param !== null && isFinite(param) && !isNaN(param);
    }

    closeDialog(){
      this.dialogRef.close();
    }

    ngOnDestroy(): void {
      //this.popupservice.OBSlatlng.unsubscribe();
    }

    

}
