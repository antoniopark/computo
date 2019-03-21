import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc';
import { PerfilesPage } from "../index.paginas";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'page-nfc',
  templateUrl: 'nfc.html',
})
export class nfcPage {

  results:any = Observable; // ??
  perfiles:any = PerfilesPage;
//aqui se estara escuchando el nfc
//una vez que lo encuentre, se hace el ajax request con el que recibió
//y se abre la pantalla de Perfil con el json llenando los campos
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

  
  //ya que tenga los datos, irAPaginaPerfil con los datos para mostrar
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private nfc: NFC, private ndef: Ndef,
    public httpClient: HttpClient) {
      //aqui escucha al nfc
      this.nfc.addNdefListener(() => {
        
        console.log('attached ndef listener');
      }, (err) => {
        console.log('error attaching ndef listener', err);
      }).subscribe((event) => {
        console.log('received message. Tag contains: ', event);
        console.log('tanpmg id: ', this.nfc.bytesToHexString(event.tag.id));
        this.ajaxCall(this.nfc.bytesToHexString(event.tag.id));
      });

  }
  //fetching api
  ajaxCall(idABuscar:any){
    this.results = this.httpClient.get('https://skeleton-app-itson.000webhostapp.com/rest/rest/index.php/Muertos/obtener_muertosById/'+idABuscar);
    console.log(this.results
  
    .subscribe(data => {
      console.log('resultados: ', data);
    }))
  }


 irPaginaPerfil( muerto:any ){
    console.log( muerto );

      this.navCtrl.push( PerfilesPage, { 'objetivo': muerto } );

  }
 



}
