import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StarterComponent} from '../starter.component';
import {ArticlesComponent} from '../articles/articles.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ArticleFormComponent} from '../article-form/article-form.component';
import {UsersComponent} from '../users/users.component';
import {UserFormComponent} from '../user-form/user-form.component';
import {CategoriesComponent} from '../categories/categories.component';
import {CategoryFormComponent} from '../category-form/category-form.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: StarterComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard', pathMatch: 'full'
          },
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'articles',
            component: ArticlesComponent
          },
          {
            path: 'articles/create',
            component: ArticleFormComponent
          },
          {
            path: 'users',
            component: UsersComponent
          },
          {
            path: 'users/create',
            component: UserFormComponent
          },
          {
            path: 'categories',
            component: CategoriesComponent
          },
          {
            path: 'categories/create',
            component: CategoryFormComponent
          }
        ]
      }
    ]),
  ],
  exports:
    [
      RouterModule
    ],
  providers: []
})

export class StarterRoutingModule {
}
