import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'environment';

const eleWebsiteAPI = environment.eleWebsiteAPI;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPhotographerByUsername(username: string) {
    return this.http.get(`${eleWebsiteAPI}/photographers/username/${username}`);
  }
}
