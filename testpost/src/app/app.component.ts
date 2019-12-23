import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onClick(): void {
    this.post.makeAPost();
  }
  constructor(private http: HttpClient, private post: PostService) {}
  title = 'testpost';
}
