import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {Pagina2Page} from "../index.paginas";


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
pagina2:any = Pagina2Page;

  constructor(public navCtrl: NavController) {
  }

  navegarPagina(){
    this.navCtrl.push(Pagina2Page);
  }

}
