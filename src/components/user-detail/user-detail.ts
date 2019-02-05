import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailComponent {

  text: string;
  userData: any;

  constructor(private viewCtrl:ViewController, private navParam: NavParams) {
    this.userData = this.navParam.get('data');
  }

  ionViewDidLoad(){ }

  iconClick(){
    this.viewCtrl.dismiss({ data : this.userData });
  }

}
