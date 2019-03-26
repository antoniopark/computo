import { Component } from '@angular/core';
import { NavParams, NavController } from "ionic-angular";
import {MapaDirectionPage} from "../mapa-direction/mapa-direction";

@Component({
    selector: 'page-perfiles',
    templateUrl: 'perfiles.html',
  })
  export class PerfilesPage {
  
    muerto:any = {};
   // muertonfc: any= {};
    constructor ( private navParams:NavParams, private navCtrl:NavController ){
      console.log( navParams );
      //this.muertonfc = this.navParams.get("muertonfc");
      this.muerto = this.navParams.get("profile");
      if(this.muerto.imagen){
        
        //document.getElementById("fotoProfile").setAttribute("src", this.muerto.imagen);
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