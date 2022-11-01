import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-header></ngx-header>
    <router-outlet></router-outlet>
    <!-- <ngx-one-column-layout>
      <router-outlet></router-outlet>
    </ngx-one-column-layout> -->
  `,
})
export class TemplateAdminComponents implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {

  }
}
