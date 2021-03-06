// import { AdminModule } from './admin/admin.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
// import { AdminComponent } from './admin/admin.component';
// import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
// import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
// import { AdminContentComponent } from './admin/admin-content/admin-content.component';
// import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
// import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
// import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';
import {
  MatButtonModule,
  MatCheckboxModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import 'hammerjs';
import {StarterModule} from './starter/starter.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    StarterModule
    // AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
