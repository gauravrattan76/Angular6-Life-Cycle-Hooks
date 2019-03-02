import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit,OnChanges,DoCheck {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  fname: string;

  @Input()
  arrayList : any[];

  ngOnChanges(){
    console.log("Value after each change is -"+ this.fname);
    console.log("Value after each change is -"+ this.arrayList);
  }
  
  ngDoCheck(){
    console.log("ngdo check getting called -"+ this.fname);
    console.log("ngDo check getting called" + this.arrayList);
  }
}
