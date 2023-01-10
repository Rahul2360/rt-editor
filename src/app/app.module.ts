import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RtEditorModule } from 'projects/ng-rt-editor/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RtEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
