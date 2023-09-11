import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { RptaMovieDB } from './moviedb.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  constructor(private _http: HttpClient) { }

  private _apiURL = environment.apiUrl;
  private _apiKey = environment.apiKey;


  getMovies() {
    return this._http.get<RptaMovieDB>(`${this._apiURL}/discover/movie?api_key=${this._apiKey}`);
  }

}
