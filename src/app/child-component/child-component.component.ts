import { Component, OnInit, Input, OnChanges, DoCheck, OnDestroy } from '@angular/core';
import {DataService} from '../dataService';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  providers:[DataService],
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  constructor(private _dataService:DataService) {
    console.log("Constructor getting called");
  }
  data2:any[];

  ngOnInit() {
    console.log("ngOninit getting getting called");
    this._dataService.currentdata.subscribe(message => this.data2 = message)
  }

  @Input()
  fname: string;

  @Input()
  arrayList: any[];

  ngOnChanges() {
    console.log("Value after each change is -" + this.fname);
  }

  ngDoCheck() {
    console.log("ngDo check getting called" + this.arrayList);
  }

  ngOnDestroy() {
    console.log("on destroy getting called");
  }
}
