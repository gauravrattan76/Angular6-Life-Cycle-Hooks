import { Component,OnInit } from '@angular/core';
import {DataService} from './dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[DataService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _dataService:DataService){

  }
  test:any[];
  name = "Gaurav Rattan";
  myArray = ['C#','Java','Sql','Php'];
  push():void{
    this.myArray.push('Angular 6');
    this._dataService.changedata(['Ram','Shani']);
  }
  ngOnInit(){
   this._dataService.currentdata.subscribe(data =>
    this.test = data)
  }
}
