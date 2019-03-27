import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {nfcPage} from "../index.paginas";
import { BuscarPage } from '../buscar/buscar';
import {DescubrirPage} from "../index.paginas";

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

  irDescubrirPagine(){
    this.navCtrl.push(DescubrirPage);
  }

  //falta crear la page para "Descubrir"
}
