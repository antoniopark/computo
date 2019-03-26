import { Component } from '@angular/core';
import {  NavController, NavParams, ToastController  } from 'ionic-angular';
import { NFC } from '@ionic-native/nfc/';
//import { PerfilesPageNFC } from '../perfiles-nfc/perfiles-nfc';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { PerfilesPage } from '../perfilesMuertos/perfiles';
import {PerfilesnfcPage} from "../perfilesnfc/perfilesnfc";


@Component({
  selector: 'page-nfc',
  templateUrl: 'nfc.html',
})
export class nfcPage {
tagID: string;
public muertito: any;

  results:any = Observable; // ??
  //perfiles:any = PerfilesPage;
//aqui se estara escuchando el nfc
//una vez que lo encuentre, se hace el ajax request con el que recibió
//y se abre la pantalla de Perfil con el json llenando los campos
  

  
  //ya que tenga los datos, irAPaginaPerfil con los datos para mostrar
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private nfc: NFC,
    public http: HttpClient, private toastCtrl: ToastController) {
 
      /*
      //aqui escucha al nfc
      this.nfc.addNdefListener(() => {
        console.log("entra a addEventListener");
        console.log('attached ndef listener');
      }, (err) => {
        console.log('error attaching ndef listener', err);
      }).subscribe((event) => {
        console.log('received message. Tag contains: ', event);
        console.log('tanpmg id: ', this.nfc.bytesToHexString(event.tag.id));
        this.ajaxCall(this.nfc.bytesToHexString(event.tag.id));
      });
*/

this.nfc.addNdefListener().subscribe(data => {
  if (data && data.tag && data.tag.id) {      
      if (data.tag.ndefMessage) {
          let toast = this.toastCtrl.create({
              message: 'Tag NFC encontrado',
              duration: 1000,
              position: 'bottom'
          });

          toast.present();

          let payload = data.tag.ndefMessage[0].payload;
          let tagContent = this.nfc.bytesToString(payload).substring(3);
          console.log("IMPRESION SOLA DEL TAGCONTENT");
          console.log(tagContent);
          this.ajaxCall(tagContent);
          
          
      } else {
          let toast = this.toastCtrl.create({
              message: 'Tag NFC no encontrado',
              duration: 1000,
              position: 'bottom'
          });

          toast.present();

      }
  }
  
});

//this.ajaxCall(2);
  }
  //fetching api
  ajaxCall(idABuscar:any){
   
    this.results = this.http.get('https://skeleton-app-itson.000webhostapp.com/rest/index.php/Muertos/obtener_muertosById/'+idABuscar);
    (this.results
      .subscribe(data => {
      console.log(this.results);//console.log('resultados: ', data);
     console.log("AAQUI ABAJO LO PASO A LA VARIABLE THIS.MUERTITO CONVERTIO A STRING")
      this.muertito = JSON.stringify(data.value);
      console.log("datos del muerto antes de entrar al metodo");
      console.log(this.muertito);
      this.irPaginaPerfil(this.muertito);   //recibe un string 
    }))
  }


 irPaginaPerfil( profile:any ){  //recibe un string 
   //console.log( profile );
    //console.log("YA DENTRO DEL MEDOTO IR PERFIL AQUI ABAJO LO IMPRIMIRA CONVERTIRO A STRING")
    //console.log(this.muertito);
    profile = JSON.parse(profile); //aqui lo conviertes a json 
   // console.log("LO IMPRIMIRA ABAJO YA CONVERTIDO A JSON");
    //console.log(this.muertito);
    
  // console.log("AQUI VA A HACER EL PUSH ya dentro del metodo");
   //console.log(this.muertito);
   console.log("lo que se le mandaraa a la pagina: ");
   console.log(profile[0]);
      this.navCtrl.push(PerfilesPage, {'profile': profile[0]}); //pero aqui, de todos modos, le mandas el string 

  }

 



}
