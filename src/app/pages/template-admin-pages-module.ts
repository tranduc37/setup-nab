import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateAdminComponents } from './template-admin.component';
import { TemplateAdminRoutingModule } from './template-admin-routing.module';
import { HeaderComponent } from '../@theme/components/header/header.component';
import { BlogComponent } from './menu-pages/blog/blog.component';
import { HomeComponent } from './menu-pages/home/home.component';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  declarations: [
    TemplateAdminComponents,
    HeaderComponent,
    // HomeComponent,
    // BlogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // ThemeModule,
    CommonModule,
    TemplateAdminRoutingModule
  ],
  providers: [],
})
export class TemplateAdminModule { }
