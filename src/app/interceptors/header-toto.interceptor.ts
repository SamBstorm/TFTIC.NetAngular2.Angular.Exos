import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderTotoInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = 'appel du service permettant de récupérer le token';
    if(token){
      let modified = request.clone({
        headers: request.headers.set('authorization',`Bearer ${token}`)});
      return next.handle(modified);
    }
    return next.handle(request);
  }
}
