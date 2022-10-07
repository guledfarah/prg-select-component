import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectComponent } from './prg-select/prg-select.component';
import { SelectOptionComponent } from './prg-select/prg-option/prg-option.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [AppComponent, SelectComponent, SelectOptionComponent],
  imports: [OverlayModule, BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
