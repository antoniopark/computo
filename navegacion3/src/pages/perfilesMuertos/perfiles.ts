import { Component } from '@angular/core';
import { NavParams, NavController } from "ionic-angular";

@Component({
    selector: 'page-perfiles',
    templateUrl: 'perfiles.html',
  })
  export class PerfilesPage {
  
    mutante:any = {};

    constructor ( private navParams:NavParams, private navCtrl:NavController ){
      console.log( navParams );

      this.mutante = this.navParams.get("mutante");
    }

    irAtras(){
      this.navCtrl.pop();
    }

    irRoot(){
      this.navCtrl.popToRoot();
    }
   
    }