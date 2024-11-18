import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BusHomeComponent } from './components/bus-home/bus-home.component';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    BusHomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  constructor(){
  }
    /*this.postsService.getPosts().subscribe((result) => {
      console.log({result})
    })*/
  title = 'BusProject';



}
