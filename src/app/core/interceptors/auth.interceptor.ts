import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/login/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  /////      lo que estamos enviando      lo que nos va a devolver
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();

    if (token){//si existe el token lo modificamos
      let params = new HttpParams();
      params.append('auth',token)

      console.log('PARAMS',params)

      request = request.clone({
        url: `${request.url}?auth=${token}`,
        params: params
      }) //se modifica(clona) el request y se lo envia
    }

    return next.handle(request);
  }
}
