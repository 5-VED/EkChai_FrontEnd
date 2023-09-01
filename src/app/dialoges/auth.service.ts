import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

interface loginCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  eventSubject = new BehaviorSubject<any>(false);

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private http: HttpClient
  ) {}

  /**
   * Sending value to dashboard component
   */


  /**
   * @action API to Sign In
   * @method POST
   * @param data
   */
  signInUser(data: loginCredentials) {
    return this.http.post<any>(this.baseUrl + '/signin', data);
  }
}
