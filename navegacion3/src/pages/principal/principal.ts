import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {nfcPage} from "../index.paginas";


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
nfc:any = nfcPage;

  constructor(public navCtrl: NavController) {
  }

  navegarPagina(){
    this.navCtrl.push(nfcPage);
  }

}
