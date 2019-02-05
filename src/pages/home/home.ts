import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserDetailComponent } from '../../components/user-detail/user-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userDetailsFrom:FormGroup;
  modalOpen:boolean = false;

  constructor(public navCtrl: NavController, private formBuilder:FormBuilder, private modalController:ModalController, private navParamas:NavParams) {
    this.userDetailsFrom = this.formBuilder.group({
      'username': ['', Validators.compose([Validators.required])],
      'useremail': ['', Validators.compose([Validators.required, Validators.email])]
    })
  }
  ionviewDidLoad() {
  }

  submitUderDetail() {
    let userData = this.userDetailsFrom.value;
    let modal = this.modalController.create(UserDetailComponent, { data : userData });
    modal.present().then((res) => {
      res ? this.modalOpen = true : this.modalOpen = false;
    }).catch((err) => {
      console.log("error is", err)
    })
    modal.onDidDismiss(() => { this.modalOpen = false; console.log("the modal data is", this.navParamas.get('data'))})
  }
}
