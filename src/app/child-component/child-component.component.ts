import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit,OnChanges {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  fname: string;

  ngOnChanges(){
    console.log("Value after each change is -"+ this.fname);
  }

}
