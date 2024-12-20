import { Component, OnDestroy } from '@angular/core';
import { BusService, busServices } from '../../shared/models/data-bus';
import { NgClass, NgFor } from '@angular/common';
import { MatDialog, MatDialogModule} from '@angular/material/dialog'
import { BusPopupComponent } from '../bus-popup/bus-popup.component';
import { PopupServiceService } from '../../services/popup-service.service';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-home',
  standalone: true,
  imports: [NgFor, NgClass, BusPopupComponent, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './bus-home.component.html',
  styleUrl: './bus-home.component.css'
})


export class BusHomeComponent implements OnDestroy{  
  columsToDisplay = ["ID", "Name", "Area", "Client", "Duration", "Status"]
  new_services: any;
  showDialog = false;
  var: any;

  constructor(private router: Router,
              public dialogRef: MatDialog,
              public popservice: PopupServiceService,
              private postsService: PostsService){}

  ngOnInit(): void {
    this.var = this.postsService.getPosts().subscribe((value) => {
      this.new_services = value;
    });
  }
    

  openDialog(){
    this.router.navigate(['/create-service']);

    this.dialogRef.open(BusPopupComponent, {
      height: "auto",
      width: "auto",
      maxWidth: "none",
      maxHeight: "none"
    })

    this.dialogRef.afterAllClosed.subscribe(() => {
        this.router.navigate(['/'])
    })
  }

  ngOnDestroy(): void {
    //this.var.unsubscribe();
  }
  
}
