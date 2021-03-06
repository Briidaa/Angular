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
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    PageContentComponent,
    IndexComponent,
    DashboardComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
