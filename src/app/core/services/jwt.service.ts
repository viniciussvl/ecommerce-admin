import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  getToken(): String {
    return window.localStorage['token'];
  }

  saveToken(token: String): void {
    window.localStorage['token'] = token;
  }

  destroyToken(): void {
    window.localStorage.removeItem('token');
  }
}