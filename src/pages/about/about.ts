import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {apiService} from "../../services/api.service";
import {environment} from "../../config/environment";
import {DetailPage} from "../detail/detail";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private latest: any = Array();

  constructor(public navCtrl: NavController, public apiService: apiService) {
    this.getLatest();
  }

  public getLatest() {
    this.apiService.getLatest().then(response => {
      response.results.forEach(item => {
        let obj = {
          id: item.id,
          poster: environment.tmbd.baseImg + item.poster_path,
          title: item.original_title,

        };
        this.latest.push(obj);
      })
    });
  }

  public goToDetail(id:String) {
    this.navCtrl.push(DetailPage, {id:id});
  }
}
