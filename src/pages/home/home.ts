import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {apiService} from "../../services/api.service";
import {environment} from "../../config/environment";
import {DetailPage} from "../detail/detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private popular: any = Array();

  constructor(public navCtrl: NavController, public apiService: apiService) {
    this.getPopular();
  }

  private getPopular() {
    this.apiService.getPopular().then(response => {
      response.results.forEach(item =>{
          let obj = {
            id: item.id,
            poster: environment.tmbd.baseImg + item.poster_path,
            title: item.original_title,
          };
          this.popular.push(obj);
        })
      });
  }

  public goToDetail(id:String) {
    this.navCtrl.push(DetailPage, {id:id});
  }

}
