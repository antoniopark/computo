import { Component } from '@angular/core';
import { NavParams, NavController } from "ionic-angular";
import {MapaDirectionPage} from "../mapa-direction/mapa-direction";

@Component({
  selector: 'page-perfilesnfc',
  templateUrl: 'perfilesnfc.html',
})
export class PerfilesnfcPage {

  
  muerto:any = {};
  // muertonfc: any= {};
   constructor ( private navParams:NavParams, private navCtrl:NavController ){
     console.log( navParams );
     //this.muertonfc = this.navParams.get("muertonfc");
     this.muerto = this.navParams.get("profile");
     console.log("MUERTO YA EN PERFILES NFC")
     console.log(this.muerto);
     if(this.muerto.imagen){
       document.getElementById("fotoProfile").setAttribute("src", this.muerto.imagen);
     }
     
   }

   showUbication(muerto:any){
     this.navCtrl.push(MapaDirectionPage, {'muerto': muerto});
   }

   irAtras(){
     this.navCtrl.pop();
   }

   irHome(){
     this.navCtrl.popToRoot();
   }
  
   }