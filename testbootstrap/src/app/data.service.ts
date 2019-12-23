import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  postData(data: JSON) {
    const url = "post/";
    this.http.post(url, data).subscribe((data) => {
      console.log('posted');
    });
  }

  constructor(private http: HttpClient) { }
}
