import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient,
  ) {
    this.apiUrl = environment.baseUrl;
  }

  apiUrl: string;

  readonly loginEndpoint = '/auth/login';
  readonly versionEndpoint = '/public/status/version'

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const bodyData = {
      username: username,
      password: password,
    };

    return this.httpClient.post(
      `${this.apiUrl}${this.loginEndpoint}`,
      bodyData,
      { headers },
    );
  }

  getAppVersion() {
    return this.httpClient.get(
      `${this.apiUrl}${this.versionEndpoint}`,
      { responseType: 'text' },
    );
  }
}
