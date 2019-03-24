import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {nfcPage} from "../index.paginas";
import { BuscarPage } from '../buscar/buscar';


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
nfc:any = nfcPage;
buscar:any = BuscarPage;
  constructor(public navCtrl: NavController) {
  }

  navegarPagina(){
    this.navCtrl.push(nfcPage);
  }

  irBuscarPagina(){
    this.navCtrl.push(BuscarPage);
  }

  //falta crear la page para "Descubrir"
}
