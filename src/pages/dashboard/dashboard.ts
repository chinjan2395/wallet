import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

    warmth: number = 1300;
    structure: any = { lower: 33, upper: 60 };
    text: number = 0;

  constructor(public navCtrl: NavController) {
      console.log('DashboardPage');
  }

  changeEvent(){
      console.log('event',event);
      // console.log('ratio',ratio);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
