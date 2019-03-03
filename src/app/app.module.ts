import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import {DataService} from './dataService';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers:[DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
