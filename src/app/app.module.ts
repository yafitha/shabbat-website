import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LearnComponent } from '../learn/learn.component';
import { CardDetailsComponent } from '../card-details/card-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from '../home-page/home-page.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnComponent,
    CardDetailsComponent,
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
