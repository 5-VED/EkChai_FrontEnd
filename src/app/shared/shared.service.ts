import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  valueSubject = new BehaviorSubject<any>(false);
  value$ = this.valueSubject.asObservable();

  private tokenStatus = new BehaviorSubject<boolean>(false);
  tokenStatus$ = this.tokenStatus.asObservable();

  constructor() {}

  toggleVale() {
    this.valueSubject.next(!this.valueSubject.value);
  }

  updateTokenStatus(status: boolean) {
    this.tokenStatus.next(status);
  }
}
