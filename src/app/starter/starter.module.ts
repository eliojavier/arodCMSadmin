import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import {DataTableModule} from 'angular2-datatable';
import {ArticlesComponent} from './articles/articles.component';
import {ArticlesFilterPipe} from '../pipes/articles-filter.pipe';
import {StarterRoutingModule} from './starter-routing/starter-routing.module';
import 'hammerjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UsersComponent} from './users/users.component';
import {ArticleFormComponent} from './article-form/article-form.component';
import {UsersFilterPipe} from '../pipes/users-filter.pipe';
import {CategoriesComponent} from './categories/categories.component';
import {CategoryFormComponent} from './category-form/category-form.component';
import {CategoriesFilterPipe} from '../pipes/categories-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    StarterRoutingModule
  ],
  declarations: [
    ArticlesComponent,
    ArticleFormComponent,
    DashboardComponent,
    ArticlesFilterPipe,
    UsersFilterPipe,
    CategoriesFilterPipe,
    UserFormComponent,
    UsersComponent,
    CategoriesComponent,
    CategoryFormComponent
  ]
})
export class StarterModule { }
