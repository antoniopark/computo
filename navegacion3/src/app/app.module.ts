import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from "@angular/common/http";
import { MyApp } from './app.component';
import { NFC, Ndef } from '@ionic-native/nfc';



import {AjustesPage,Ajustes2Page,PrincipalPage,ModalPage,nfcPage,PerfilesPage,TabsPage, BuscarPage} from "../pages/index.paginas";
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
    BuscarPage
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
    BuscarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // NFC,
    // Ndef,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
