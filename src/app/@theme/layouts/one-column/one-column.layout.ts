import { Component } from '@angular/core';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <div windowMode>
      <header fixed>
        <!-- <ngx-header></ngx-header> -->
      </header>

      <div class="menu-sidebar" tag="menu-sidebar" responsive></div>

      <ng-content select="router-outlet"></ng-content>

      <footer fixed>
        <!-- <ngx-footer></ngx-footer> -->
      </footer>
    </div>
  `,
})
export class OneColumnLayoutComponent {}
