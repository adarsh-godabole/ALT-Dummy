import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import {FetchdataService} from './fetchdata.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule
    
    
  ],
  providers: [FetchdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
