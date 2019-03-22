import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    let data:Observable<any>;
    data = this.http.get('https://jsonplaceholder.typicode.com/users');
    data.subscribe(result =>{
    this.items = result;
    })
  }

getItems(ev: any) {
  // Reset items back to all of the items
  
  // set val to the value of the searchbar
  const val = ev.target.value;

  // if the value isn't empty, filter the values
  if (val && val.trim() != '') {
    
    this.items = this.items.filter((item) => {
      return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }else if (val.trim() === ''){
    this.loadData();
  }
}
}