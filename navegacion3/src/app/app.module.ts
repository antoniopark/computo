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




import {AjustesPage,Ajustes2Page,PrincipalPage,ModalPage,nfcPage,PerfilesPage,TabsPage, BuscarPage, MapaDirectionPage} from "../pages/index.paginas";
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
    MapaDirectionPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
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
    MapaDirectionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeGeocoder,
    // NFC,
    // Ndef,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
