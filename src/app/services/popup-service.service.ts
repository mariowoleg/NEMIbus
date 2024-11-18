import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface LatLng {
  latitude: number | null;
  longitude: number | null;
}

@Injectable({
  providedIn: 'root'
})

export class PopupServiceService {

  center: google.maps.LatLngLiteral = { lat: 41.390205, lng: 2.154007 };
  OBSlatlng: Subject<google.maps.LatLngLiteral> = new Subject<google.maps.LatLngLiteral>();
  

  constructor() { }

  setLatLng(latitude: number, longitude: number){
    this.center.lat = latitude;
    this.center.lng = longitude
    this.OBSlatlng.next(this.center);
  }


}
