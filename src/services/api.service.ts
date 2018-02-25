import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {environment} from "../config/environment";


@Injectable()
export class apiService {
  constructor(private http: Http) {

  }

  getPopular(): Promise<any> {
    return this.http.get(environment.tmbd.url + "/movie/popular"
      + "?api_key=" + environment.tmbd.apiKey
      + "&language=fr-FR")
      .toPromise()
      .then(resp => resp.json())
  }

  getLatest(): Promise<any> {
    return this.http.get(environment.tmbd.url + "/movie/upcoming"
      + "?api_key=" + environment.tmbd.apiKey
      + "&language=fr-FR")
      .toPromise()
      .then(resp => resp.json())
  }

  getDetail(id: String): Promise<any> {
    return this.http.get(environment.tmbd.url + "/movie/" + id
      + "?api_key=" + environment.tmbd.apiKey
      + "&language=fr-FR")
      .toPromise()
      .then(resp => resp.json())
  }

  getCredits(id: String): Promise<any> {
    return this.http.get(environment.tmbd.url + "/movie/" + id + "/credits"
      + "?api_key=" + environment.tmbd.apiKey
      + "&language=fr-FR")
      .toPromise()
      .then(resp => resp.json())
  }

  getPeople(id: String): Promise<any> {
    return this.http.get(environment.tmbd.url + "/person/" + id
      + "?api_key=" + environment.tmbd.apiKey
      + "&language=fr-FR")
      .toPromise()
      .then(resp => resp.json())
  }

  getGenreDetail(id: String): Promise<any> {
    return this.http.get(environment.tmbd.url + "/genre/" + id
      + "/movies"
      +"?api_key=" + environment.tmbd.apiKey
      + "&language=fr-FR")
      .toPromise()
      .then(resp => resp.json())
  }


}
