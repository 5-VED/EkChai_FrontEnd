import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface loginCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private http: HttpClient
  ) {}

  /**
   * @action API to Sign In
   * @method POST
   * @param data
   */
  signInUser(data: loginCredentials) {
    return this.http.post<any>(this.baseUrl + '/signin', data);
  }
}
