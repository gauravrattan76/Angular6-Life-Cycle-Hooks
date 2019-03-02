import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Gaurav Rattan";
  myArray = ['C#','Java','Sql','Php'];
  push():void{
    this.myArray.push('Angular 6');
  }
}
