import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { TopbarComponent } from './Components/topbar/topbar.component';
import { PageContentComponent } from './Components/page-content/page-content.component';
import { IndexComponent } from './Components/index/index.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResultComponent } from './pages/result/result.component';
import { AddVisitorComponent } from './pages/add-visitor/add-visitor.component';
import { TenantComponent } from './pages/tenant/tenant.component';
import { CheckedinComponent } from './pages/checkedin/checkedin.component';
import { AssignTenantComponent } from './pages/assign-tenant/assign-tenant.component';
import { HttpClientModule } from '@angular/common/http';
import { CardSliderComponent } from './Components/card-slider/card-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    PageContentComponent,
    IndexComponent,
    DashboardComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    ResultComponent,
    AddVisitorComponent,
    TenantComponent,
    CheckedinComponent,
    AssignTenantComponent,
    CardSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
