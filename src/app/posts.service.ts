import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url="https://hpb.health.gov.lk/api/get-current-statistical"

  constructor(private http:HttpClient) { }
  getPost()
  {
    return this.http.get(this.url);
  }
}
