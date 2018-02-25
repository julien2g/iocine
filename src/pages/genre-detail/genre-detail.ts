import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {apiService} from "../../services/api.service";
import {environment} from "../../config/environment";
import {ActorPage} from "../actor/actor";
import {DetailPage} from "../detail/detail";

/**
 * Generated class for the GenreDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-genre-detail',
  templateUrl: 'genre-detail.html',
})
export class GenreDetailPage {
  private movies: any = Array();
  private genreName: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiService: apiService) {
    this.getMovies(navParams.get('id'));
   this.genreName = navParams.get('name');
  }

  public getMovies(id: String) {
    this.apiService.getGenreDetail(id).then(resp => {

      resp.results.forEach(item => {
        let obj = {
          id: item.id,
          poster: environment.tmbd.baseImg + item.poster_path,
          title: item.original_title

        }
          this.movies.push(obj);
      }

      )
    })
  }
  public goToDetail(id: String){
    this.navCtrl.push(DetailPage, {id:id});
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad GenreDetailPage');
  }

}
