import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/menu-pages/home/home.component';
import { TemplateAdminComponents } from './pages/template-admin.component';

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

  // {
  //   path: 'auth',
  //   component: NbAuthComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'login',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'register',
  //       component: NbRegisterComponent,
  //     },
  //     {
  //       path: 'logout',
  //       component: NbLogoutComponent,
  //     },
  //     {
  //       path: 'request-password',
  //       component: NbRequestPasswordComponent,
  //     },
  //     {
  //       path: 'reset-password',
  //       component: NbResetPasswordComponent,
  //     },
  //   ],
  // },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/template-admin-pages-module').then((m) => m.TemplateAdminModule),
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },

]

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
