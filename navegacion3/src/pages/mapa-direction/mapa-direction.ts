import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the MapaDirectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mapa-direction',
  templateUrl: 'mapa-direction.html',
})
export class MapaDirectionPage {

  lat: number ;
  lng: number ;
  Mylat: number;
  Mylng: number;

  muerto:any={};
  ubicacion:any={};
  latitude:any ={};
  longitud:any={};
  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  geopositionOptions: PositionOptions ={
    enableHighAccuracy: false,
    maximumAge:0,
    timeout: 4000
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public nativeGeo: NativeGeocoder,
    private geolocation: Geolocation) {
  
      this.geolocation.getCurrentPosition().then((resp)=>{

        this.Mylat = resp.coords.latitude;
        this.Mylng = resp.coords.longitude;
        console.log("las coordenadas que obtuvo son: ");
        console.log("lat: "+this.Mylat);
        console.log("long: "+this.Mylng);
      }).catch((error) =>{
        console.log("error al obtener posicion", error);
      });
    this.muerto = this.navParams.get("muerto");
    this.ubicacion = this.muerto.ubicacion; //< checa la ubicacion que recibe 
    //console.log(this.ubicacion); 

    //metodo para obtener las coordenadas V 
    this.nativeGeo.forwardGeocode(this.ubicacion, this.options) //si todo sale bien, las imprime
    .then((coordinates: NativeGeocoderForwardResult[]) => {
      this.latitude = coordinates[0].latitude;
      this.longitud = coordinates[0].longitude; 
      console.log(this.latitude + " " + this.longitud);
      this.showMap();
    })
    .catch((error: any) => console.log(error)); //si no, tira error 
    

//aqui igualas a las coordenadas de la tumba
 //   this.lat = 27.4809055;
 //   this.lng = -109.9903525;
      this.lat = this.latitude; //coordenadas de la tumba
      this.lng = this.longitud; //coordenadas de la tumba
//Aqui igualas la a las coordenadas de tu posicion
   // this.Mylat = 27.48185727862723; //aqui tienen que ser las de tu posicion, no fijas 
   // this.Mylng = -109.98972489922475; // same 
  }

  
  showMap() {
    //launch map with google maps 
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad MapaDirectionPage');
  }

  //this.nativeGeo.forwardGEocode(success, failure, this.ubicacion, this.options);
}