import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CafeService {

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private http: HttpClient
  ) {}

  // THis is the end point to get details of dashboard
  dashboardDetails() {
    return this.http.get<any>(this.baseUrl+'/details')
  }
}
