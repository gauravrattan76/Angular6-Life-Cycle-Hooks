import { Component,OnInit } from '@angular/core';
import {DataService} from './dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _dataService:DataService){

  }
  test:string;
  name = "Gaurav Rattan";
  myArray = ['C#','Java','Sql','Php'];
  push():void{
    this.myArray.push('Angular 6');
    this._dataService.changedata("Redmi");
  }
  ngOnInit(){
   this._dataService.currentdata.subscribe(data =>
    this.test = data)
  }
  subject(data){
    this._dataService.changedata(data);
    
  }
}
