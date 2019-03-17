import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { PerfilesPage } from "../index.paginas";



@Component({
  selector: 'page-nfc',
  templateUrl: 'nfc.html',
})
export class nfcPage {

  perfiles:any = PerfilesPage;

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

      this.navCtrl.push( PerfilesPage, { 'mutante': mutante } );

  }

 

}
