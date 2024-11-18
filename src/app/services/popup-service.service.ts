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
  lat = 41.390205
  lng = 2.154007
  center: google.maps.LatLngLiteral = { lat: this.lat, lng: this.lng };
  OBSlatlng: Subject<google.maps.LatLngLiteral> = new Subject<google.maps.LatLngLiteral>();
  sv_name: string = "";

  constructor() { }

  setLatLng(latitude: number, longitude: number){
    this.center.lat = latitude;
    this.center.lng = longitude
    this.OBSlatlng.next(this.center);
  }

  setName(name:string){
    this.sv_name = name;
  }

}
