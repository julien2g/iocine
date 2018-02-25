import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {apiService} from "../../services/api.service";

/**
 * Generated class for the ActorPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actor',
  templateUrl: 'actor.html',
})
export class ActorPage {
  private detail: any = [];
  private imgPath = "http://image.tmdb.org/t/p/w300";

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiService: apiService) {
    this.getPeople(navParams.get('id'));

    console.log(this.detail.profile_path);
  }

  public getPeople(id) {
    this.apiService.getPeople(id).then(resp => {
      this.detail = resp;

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActorPage');
  }

}
