var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NFC, Ndef } from "@ionic-native/nfc/ngx";
import { PerfilesPage } from "../index.paginas";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
var nfcPage = (function () {
    function nfcPage(navCtrl, navParams, nfc, ndef, httpClient) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nfc = nfc;
        this.ndef = ndef;
        this.httpClient = httpClient;
        this.results = Observable; // ??
        this.perfiles = PerfilesPage;
        //aqui se estara escuchando el nfc
        //una vez que lo encuentre, se hace el ajax request con el que recibió
        //y se abre la pantalla de Perfil con el json llenando los campos
        this.mutantes = [
            {
                nombre: "Ernesto de la Cruz",
                muerte: "8/Sep/1989 - 20/Oct/2018",
                epitafio: "Una tumba es suficiente para quien el Universo no bastara."
            },
            {
                nombre: "Los sueños del Hermosillo",
                muerte: "8 de Septiembre del 1989",
                epitafio: "Una tumba es suficiente para quien el Universo no bastara."
            },
            {
                nombre: "Steve Jobs",
                muerte: "8 de Septiembre del 1989",
                epitafio: "Una tumba es suficiente para quien el Universo no bastara."
            },
            {
                nombre: "Michael Jackson",
                muerte: "8 de Septiembre del 1989",
                epitafio: "Una tumba es suficiente para quien el Universo no bastara."
            }
        ];
        //aqui escucha al nfc
        this.nfc.addNdefListener(function () {
            console.log('attached ndef listener');
        }, function (err) {
            console.log('error attaching ndef listener', err);
        }).subscribe(function (event) {
            console.log('received message. Tag contains: ', event.tag);
            console.log('tag id: ', _this.nfc.bytesToHexString(event.tag.id));
            _this.ajaxCall(_this.nfc.bytesToHexString(event.tag.id));
        });
    }
    //fetching api
    nfcPage.prototype.ajaxCall = function (idABuscar) {
        this.results = this.httpClient.get('https://skeleton-app-itson.000webhostapp.com/rest/rest/index.php/Muertos/obtener_muertosById/' + idABuscar);
        this.results
            .subscribe(function (data) {
            console.log('resultados: ', data);
        });
    };
    //ya que tenga los datos, irAPaginaPerfil con los datos para mostrar
    nfcPage.prototype.irPaginaPerfil = function (muerto) {
        console.log(muerto);
        this.navCtrl.push(PerfilesPage, { 'objetivo': muerto });
    };
    nfcPage = __decorate([
        Component({
            selector: 'page-nfc',
            templateUrl: 'nfc.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            NFC, Ndef,
            HttpClient])
    ], nfcPage);
    return nfcPage;
}());
export { nfcPage };
//# sourceMappingURL=nfc.js.map