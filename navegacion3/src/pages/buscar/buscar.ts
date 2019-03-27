import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerfilesPage } from '../perfilesMuertos/perfiles';

@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {

  searchQuery: string = '';
  
  public items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.loadData();
    
  }

  loadData(){
    console.log("se corre este metodo del diablo > ");
    //let data:Observable<any>;
    let data:Observable<any>;
    data = this.http.get('https://skeleton-app-itson.000webhostapp.com/rest/index.php/Muertos');
    data.subscribe(results => {
      //console.log(JSON.stringify(results.value)); // <- lo conviertes a JSON y accedes a value
      console.log("se imprimira el result")
    console.log( this.items = JSON.parse(JSON.stringify(results.value)));
     
    })
  }
  

  irAPerfil(profile:any){
    
    this.navCtrl.push(PerfilesPage, {'profile': profile});
  }
getItems(ev: any) {
  // Reset items back to all of the items
  
  // set val to the value of the searchbar
  const val = ev.target.value;

  // if the value isn't empty, filter the values
  if (val && val.trim() != '') {
    
    this.items = this.items.filter((item) => {
      return (item.nombres.toLowerCase().indexOf(val.toLowerCase()) > -1 || 
              item.apellidos.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }else if (val.trim() === ''){
    this.loadData();
  }
}
}