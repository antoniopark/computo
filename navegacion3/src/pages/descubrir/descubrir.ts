import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { PerfilesPage } from '../perfilesMuertos/perfiles';

@Component({
  selector: 'page-descubrir',
  templateUrl: 'descubrir.html',
})
export class DescubrirPage {
  Mylat: number;
  Mylng: number;
  results:any = Observable;
  urlBase: string;
  
  public items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation, public http: HttpClient) {
  
    
    this.geolocation.getCurrentPosition().then((resp)=>{
    this.Mylat = resp.coords.latitude;
    this.Mylng = resp.coords.longitude;
    console.log("las coordenadas que obtuvo son: ");
    console.log("lat: "+this.Mylat);
    console.log("long: "+this.Mylng);
    this.urlBase = 'https://skeleton-app-itson.000webhostapp.com/rest/index.php/Muertos/obtener_cercaDeMi/'+this.Mylat + '/' +this.Mylng;
    console.log(this.urlBase);
    this.solicitarCoordenadas();
  }).catch((error) =>{
    console.log("error al obtener posicion", error);
  });
  }


  solicitarCoordenadas(){
   // this.results =  this.http.post(urlBase +this.Mylat +this.Mylng) 
   //let postData = new FormData();
   //postData.append(+this.Mylat,+this.Mylng); 
    let data:Observable<any>;  
    data = this.http.get(this.urlBase);
    data.subscribe(result =>{

      this.items = JSON.parse(JSON.stringify(result));
      console.log(result.value);
    })
 
   
  }



irAPerfil(profile:any){  
    this.navCtrl.push(PerfilesPage, {'profile': profile});
  }

 

}
