import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pagina3Page } from "../index.paginas";



@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3:any = Pagina3Page;

  mutantes:any[] = [
    {
      nombre:"Ernesto de la Cruz",
      muerte:"8/Sep/1989 - 20/Oct/2018",
      epitafio:"Una tumba es suficiente para quien el Universo no bastara."
    },
    {
      nombre:"Los sueños del Hermosillo",
      muerte:"8 de Septiembre del 1989",
      epitafio:"Una tumba es suficiente para quien el Universo no bastara."
    },
    {
      nombre:"Steve Jobs",
      muerte:"8 de Septiembre del 1989",
      epitafio:"Una tumba es suficiente para quien el Universo no bastara."
    },
    {
      nombre:"Michael Jackson",
      muerte:"8 de Septiembre del 1989",
      epitafio:"Una tumba es suficiente para quien el Universo no bastara."
    }]; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3( mutante:any ){
    console.log( mutante );

      this.navCtrl.push( Pagina3Page, { 'mutante': mutante } );

  }

 

}
