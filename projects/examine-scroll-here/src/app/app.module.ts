import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollHereModule } from 'projects/scroll-here/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScrollHereModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
