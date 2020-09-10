import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage 
{

  public latitudPromesa;
  public longitudPromesa;
  public latitudObservable;
  public longitudObservable;
  
  constructor(private geolocation: Geolocation) 
  {
    this.latitudPromesa = 0;
    this.longitudPromesa = 0;
    this.latitudObservable = 0;
    this.longitudObservable= 0;
  }

 obtenerLocalizacionPromesa():void
 {
  this.geolocation.getCurrentPosition().then((resp)=>
  {
    this.latitudPromesa = resp.coords.latitude 
    this.longitudPromesa = resp.coords.longitude
  }).catch((error) =>
  {
    console.log('Error getting location', error);
  });

 }


 obtenerLocalizacionObservable():void
 {
  let watch= this.geolocation.watchPosition();
  watch.subscribe((data) =>
  {
    this.latitudObservable = data.coords.latitude 
    this.longitudObservable = data.coords.longitude
  });

 }





















}
