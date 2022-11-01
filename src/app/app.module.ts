import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './@theme/components/header/header.component';
import { FooterComponent } from './@theme/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ThemeModule } from './@theme/theme.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ThemeModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
