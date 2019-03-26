import { NativeGeocoder } from '@ionic-native/native-geocoder/';
//import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from "@angular/common/http";
import { MyApp } from './app.component';
//import {NativeGeocoder} from '@ionic-native/native-geocoder';
import { NFC, Ndef } from '@ionic-native/nfc';
//import {Geolocation} from '@ionic-native/geolocation';



//Mapa
import { AgmCoreModule } from '@agm/core';

import {AjustesPage,Ajustes2Page,PrincipalPage,ModalPage,nfcPage,PerfilesPage,TabsPage, BuscarPage, MapaDirectionPage,PerfilesnfcPage} from "../pages/index.paginas";
    
    import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    AjustesPage,
    Ajustes2Page,
    PrincipalPage,
    ModalPage,
    nfcPage,
    PerfilesPage,
    TabsPage,
    BuscarPage,
    MapaDirectionPage,
    PerfilesnfcPage
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
 AgmCoreModule.forRoot({
  apiKey: 'AIzaSyDhIfq5v19WsAbDy20e47-ZHZjU67q7Go0'
})

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Ajustes2Page,
    PrincipalPage,
    ModalPage,
    nfcPage,
    PerfilesPage,
    TabsPage,
    BuscarPage,
    MapaDirectionPage,
    PerfilesnfcPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeGeocoder,
    NFC,
    Ndef,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
