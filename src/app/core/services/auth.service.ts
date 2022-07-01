import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
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
    private http: HttpClient,
    private jwtService: JwtService
    ) { }

  login(credentials: ICredentials) {
    return this.http.post<any>(environment.apiUrl + '/auth/login', credentials)
    .pipe(map((result) => {
      this.jwtService.saveToken(result.token);
      return result.user;
    }))
  }

  register(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/register', data);
  }
}
