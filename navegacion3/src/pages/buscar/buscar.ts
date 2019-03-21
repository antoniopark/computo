import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {

  searchQuery: string = '';
  //items: string[];
public items:any;
apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
   //this.initializeItems();
    this.loadData();
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  

  loadData(){
    let data:Observable<any>;
    data = this.http.get('https://jsonplaceholder.typicode.com/users');
    data.subscribe(result =>{
    this.items = result;
    })
  }

getItems(ev: any) {
  // Reset items back to all of the items
  this.loadData();
  // set val to the value of the searchbar
  const val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.items = this.items.filter((item) => {
      return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}
}