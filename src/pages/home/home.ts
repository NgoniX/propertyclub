import { Component } from '@angular/core';
import { NavController, LoadingController, Platform } from 'ionic-angular';
import { NewsdetailPage } from '../newsdetail/newsdetail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


 // The items array to populate with data is created
  articles: any;
  articleIndex = 0;
  queryText = '';

  groups: any = [];

  constructor(
  	public navCtrl: NavController, 
  	public loadingController: LoadingController,
    public platform: Platform
  	) {

  }

  // load news data from api on home page
  ionViewDidLoad() {


  }



  //display network status
  ionViewDidEnter() {


  }

  ionViewWillLeave(){

  }



  // go to news detail
  newsDetail(newsData: any) {
    // go to the book detail page
    // and pass in the book data
    this.navCtrl.push(NewsdetailPage, {
      title: newsData.title,
      news: newsData
    });
  }
 

}
