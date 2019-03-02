
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<any[]>([]);

   currentdata = this.messageSource.asObservable();

  constructor() { }

  changedata(val: any[]) {
    this.messageSource.next(val);
  }

}