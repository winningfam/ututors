import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  makeAPost() {
    console.log("hello");
    const url = "post/"
    this.http.post(url, {firstname: "my_name", lastname: "last_name", email: "matthew@winningham.us", phonenumber: "832515"}).subscribe((data: JSON) => {
       console.log('posted');
    });
  }
  constructor(private http: HttpClient) { }
}
