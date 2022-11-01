import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './template-admin-pages/menu-pages/home/home.component';
import { TemplateAdminComponents } from './template-admin-pages/template-admin.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateAdminComponents,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ]
  },
  {
    path: '',
    loadChildren: () =>
      import('./template-admin-pages/template-admin-pages-module').then((m) => m.TemplateAdminModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
