import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./menu-pages/blog/blog.component";
import { HomeComponent } from "./menu-pages/home/home.component";
import { TemplateAdminComponents } from "./template-admin.component";

const routes: Routes = [
  {
    path: '',
    component: TemplateAdminComponents,
    children: [
      {
        path: 'dashboard',
        component: HomeComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateAdminRoutingModule { }
