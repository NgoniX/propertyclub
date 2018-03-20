import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-newsdetail',
  templateUrl: 'newsdetail.html',
})
export class NewsdetailPage {
  news: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.news = navParams.data.news;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsdetailPage');
  }


}
