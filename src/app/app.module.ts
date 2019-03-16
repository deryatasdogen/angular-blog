import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MainpageAppComponent } from './mainpage/mainpage-app.component';
import { MainpageModule } from './mainpage/mainpage.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
