import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

//@Injectable()
//export class APIInterceptor implements HttpInterceptor {
//  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//    console.log(req.url);  
//    const apiReq = req.clone({ url: `ututors.appspot.com/${req.url}`});
//    console.log(apiReq.url);
//    return next.handle(apiReq);
//  }
//}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  //providers: [{
  //  provide: HTTP_INTERCEPTORS,
  //  useClass: APIInterceptor,
  //  multi: true
  //}],
  bootstrap: [AppComponent]
})
export class AppModule { }


