import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {apiService} from "../../services/api.service";
import {environment} from "../../config/environment";
import {ActorPage} from "../actor/actor";
import {GenreDetailPage} from "../genre-detail/genre-detail";


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  private detail: any = [];
  private credits: any = Array();
  private imgPath = "http://image.tmdb.org/t/p/w780";

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiService: apiService) {
    this.getDetail(navParams.get('id'));
    this.getCredits(navParams.get('id'));
  }

  public getDetail(id) {
    this.apiService.getDetail(id).then(resp => {
      this.detail = resp;

    })
  }

  public getCredits(id) {
    this.apiService.getCredits(id).then(resp => {
      resp.cast.forEach(item => {
        let obj = {
          id: item.id,
          poster: item.profile_path? environment.tmbd.baseImg + item.profile_path: "../../assets/imgs/people.png",
          name: item.name,
          character: item.character,
        };
        this.credits.push(obj);
      })
    })
  }

public goToDetail(id: String){
  this.navCtrl.push(ActorPage, {id:id});
}

public goToGenre(id: String, name: String) {
    this.navCtrl.push(GenreDetailPage, {id:id, name:name});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
