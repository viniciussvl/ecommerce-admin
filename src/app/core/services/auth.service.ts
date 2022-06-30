import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtService } from './jwt.service';

interface ICredentials {
  email: String,
  password: String
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private jwtService: JwtService,
    private http: HttpClient) { }

  login(credentials: ICredentials): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/login', credentials);
  }

  register(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/register', data);
  }
}
