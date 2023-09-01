import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  valueSubject = new BehaviorSubject<any>(false);
  value$ = this.valueSubject.asObservable();

  constructor() {}

  toggleVale() {
    this.valueSubject.next(!this.valueSubject.value);
  }
}
