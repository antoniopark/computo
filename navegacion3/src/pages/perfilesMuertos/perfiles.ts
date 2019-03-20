import { Component } from '@angular/core';
import { NavParams, NavController } from "ionic-angular";

@Component({
    selector: 'page-perfiles',
    templateUrl: 'perfiles.html',
  })
  export class PerfilesPage {
  
    muerto:any = {};

    constructor ( private navParams:NavParams, private navCtrl:NavController ){
      console.log( navParams );

      this.muerto = this.navParams.get("objetivo");
    }

    irAtras(){
      this.navCtrl.pop();
    }

    irRoot(){
      this.navCtrl.popToRoot();
    }
   
    }