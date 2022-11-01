import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateAdminComponents } from './template-admin.component';
import { TemplateAdminRoutingModule } from './template-admin-routing.module';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  declarations: [
    TemplateAdminComponents,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    TemplateAdminRoutingModule
  ],
  providers: [],
})
export class TemplateAdminModule { }
