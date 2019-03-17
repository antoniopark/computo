import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';


import {AjustesPage,Ajustes2Page,PrincipalPage,ModalPage,nfcPage,PerfilesPage,TabsPage} from "../pages/index.paginas";

@NgModule({
  declarations: [
    MyApp,
    AjustesPage,
    Ajustes2Page,
    PrincipalPage,
    ModalPage,
    nfcPage,
    PerfilesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
