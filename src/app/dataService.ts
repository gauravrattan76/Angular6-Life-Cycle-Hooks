
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<string>("Gaurav");

   currentdata = this.messageSource.asObservable();

  constructor() { }

  changedata(val: string) {
    this.messageSource.next(val);
  }

}