import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';


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

  muerto:any={};
  ubicacion:any={};
  latitude:any ={};
  longitud:any={};
  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public nativeGeo: NativeGeocoder) {
  
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
  }

  
  showMap() {
    //launch map with google maps 
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad MapaDirectionPage');
  }

  //this.nativeGeo.forwardGEocode(success, failure, this.ubicacion, this.options);
}
