import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NotificationMessagesComponent } from './notification-messages/notification-messages.component';
import {SimpleNotificationsModule} from 'angular2-notifications';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HeaderComponent} from './components/header/header.component';
import {ArticleFormComponent} from './article-form/article-form.component';
import {ArticleComponent} from './article/article.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule} from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    NgbDropdownModule.forRoot(),
    SimpleNotificationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    ArticleFormComponent,
    ArticleComponent,
    NotificationMessagesComponent
  ]
})
export class LayoutModule {
}
