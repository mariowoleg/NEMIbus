import { Component, OnInit, ViewChild } from '@angular/core';
import {GoogleMap, GoogleMapsModule } from '@angular/google-maps'
import { PopupServiceService } from '../../services/popup-service.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{
  @ViewChild('map') map!: GoogleMap;
  center: google.maps.LatLngLiteral = { lat: 41.390205, lng: 2.154007 };
  zoom = 12;

  mapOptions: google.maps.MapOptions = {
    center: this.center,
    zoom: this.zoom
  }

  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: 37.7749, lng: -122.4194 },
    { lat: 37.7849, lng: -122.4094 }
  ];

  constructor(private popup: PopupServiceService){  }

  ngOnInit(): void {
    this.popup.OBSlatlng.subscribe((value) => {
      console.log("Map Value")
      console.log(value)
      this.center = value;
      this.map.googleMap?.setCenter(this.center);
    })
  }

  handleMapInitialized(map: google.maps.Map){
    this.markers.forEach((markerData) => {
      const marker = new google.maps.marker.AdvancedMarkerElement({
        map, // Asociar el marcador con el mapa
        position: markerData.position,
        title: markerData.title,
        zIndex: 1,
      });
  
      // Opcional: Configurar la etiqueta (label) como contenido del marcador
      if (markerData.label) {
        const labelDiv = document.createElement('div');
        labelDiv.textContent = markerData.label.text;
        labelDiv.style.color = markerData.label.color;
        labelDiv.style.fontSize = '14px';
        marker.content = labelDiv;
      }
      // Animación personalizada: La animación no es soportada directamente por AdvancedMarkerElement.
      // Aquí puedes implementar una animación como DROP o BOUNCE de manera personalizada, si es necesario.
    });
  }
  

  markers = [{
    position:{
    lat: 41.390205,
    lng: 2.154007,
  },
    visible: false,
    opacity: 0.1,
    label: {
      color: 'black',
      text: 'Marker label ',
    },
    title: 'Barcelona ',
    options: {
      animation: google.maps.Animation.DROP,
      icon: 'assets/map-pin.png'
    }
  }]
}
