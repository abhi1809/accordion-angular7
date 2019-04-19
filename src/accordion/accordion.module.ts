import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AccordionComponent]
})
export class AccordionModule { }
