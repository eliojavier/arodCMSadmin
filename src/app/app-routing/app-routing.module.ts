// import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
// import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import {StarterComponent} from '../starter/starter.component';
// import { AdminComponent } from './../admin/admin.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ArticlesComponent} from '../starter/articles/articles.component';
import {StarterRoutingModule} from '../starter/starter-routing/starter-routing.module';
import {LoginComponent} from '../login/login.component';

@NgModule({
  imports: [
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     redirectTo: 'starter',
    //     pathMatch: 'full'
    //   },
    //   { path: 'starter', component: StarterComponent },
    // ])
    RouterModule.forRoot([
      {
        path: 'admin',
        component: StarterComponent,
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
