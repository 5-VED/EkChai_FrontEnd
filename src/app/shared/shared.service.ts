import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  eventSubject = new BehaviorSubject<any>(false);
  constructor() {}

  toggleDrawerEvent(value: boolean) {
    this.eventSubject.next(value);
  }

  toggleDrawerObservable(): Observable<any> {
    return this.eventSubject.asObservable();
  }
}
