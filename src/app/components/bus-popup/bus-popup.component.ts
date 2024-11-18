import { booleanAttribute, Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupServiceService } from '../../services/popup-service.service';
import { PostsService } from '../../services/posts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-popup',
  standalone: true,
  imports: [MapComponent, MatDialogModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './bus-popup.component.html',
  styleUrl: './bus-popup.component.css'
})
export class BusPopupComponent implements OnInit{
  lat: number = 41.390205;
  lng: number = 2.154007;
  serviceForm: FormGroup = new FormGroup('');

  constructor(private router: Router,
    public dialogRef: MatDialogRef<BusPopupComponent>,
    private popupservice: PopupServiceService,
    private postsService: PostsService){}


    ngOnInit(): void {
      this.serviceForm = new FormGroup({
        id: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        area: new FormControl('', [Validators.required]),
        client: new FormControl('', [Validators.required]),
        time: new FormControl('', [Validators.required, Validators.pattern('^[0-5][0-9]:[0-5][0-9]$')]),
        active: new FormControl(booleanAttribute),
        latitude: new FormControl('', [Validators.required]),
        longitude: new FormControl('', [Validators.required]),
      });
      }

    onSubmit(): void {
      console.log(this.serviceForm.value)
      this.postsService.addPost(this.serviceForm.value);

      this.closeDialog();
    }

    onChangeInput(): void{
      if(this.isValid(this.lat) && this.isValid(this.lng)){
        this.popupservice.setLatLng(this.lat, this.lng);
      }
    }

    formatTime(event: Event) {
      const input = event.target as HTMLInputElement;
      let value = input.value.replace(/[^0-9]/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + ':' + value.slice(2);
      }
    
      input.value = value;
      this.serviceForm.get('time')?.setValue(value);
    }

    isValid(param: number): boolean{
      return param !== null && isFinite(param) && !isNaN(param);
    }

    closeDialog(){
      this.dialogRef.close();
    }

}
