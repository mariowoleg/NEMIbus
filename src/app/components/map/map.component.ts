import { Component, OnDestroy, ViewChild } from '@angular/core';
import {GoogleMap, GoogleMapsModule } from '@angular/google-maps'
import { PopupServiceService } from '../../services/popup-service.service';
import { PostsService } from '../../services/posts.service';
import { BusService } from '../../data-bus';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnDestroy{
  @ViewChild('map') map!: GoogleMap;
  center: google.maps.LatLngLiteral = { lat: 41.390205, lng: 2.154007 };
  zoom = 12;
  services: Array<BusService> = new Array<BusService>();
  aux_latlng: google.maps.LatLngLiteral  = {lat: 0, lng: 0}


  mapOptions: google.maps.MapOptions = {
    center: this.center,
    zoom: this.zoom
  }

  infoWindow = new google.maps.InfoWindow();

  constructor(private popup: PopupServiceService, private postService: PostsService){}

  //Funcionalitat per a carregar la config un cop estigui inicialitzat el mapa
  handleMapInitialized(map: google.maps.Map){
    this.popup.OBSlatlng.subscribe((value) => {
      this.map.googleMap?.setCenter(value)
    })

    this.postService.getPosts().subscribe((services) =>{
      services.forEach((service) =>{
        const id = service.id.toString()
        const name = service.name
        const sv_position = new google.maps.LatLng(service.latitude, service.longitude)
        const marker = new google.maps.Marker({
          position: sv_position,
          map: map,
          animation: google.maps.Animation.DROP,
          label: {
            color: 'black',
            text: id,
          },
          title: name,
          icon: 'assets/map-pin.png'
        });

        marker.addListener('click', () => {
          this.infoWindow.close();
          this.infoWindow.setContent(marker.getTitle())
          this.infoWindow.open(marker.getMap(), marker);
        });
      })
    })
  }


  onListenLatLng(event: google.maps.MapMouseEvent){
    const lat = event.latLng?.lat();
    const lng = event.latLng?.lng();

    if(lat != null && lng != null){
      this.popup.lat = lat;
      this.popup.lng = lng;
      this.popup.setLatLng(lat, lng)
    }
  }

  ngOnDestroy(): void {
    //this.popup.OBSlatlng.unsubscribe();
  }

}
