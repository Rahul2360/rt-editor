import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RtEditorComponent } from './ng-rt-editor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [RtEditorComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class RtEditorModule { }
