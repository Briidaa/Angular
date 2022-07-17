import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Components/index/index.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TablesComponent } from './pages/tables/tables.component';


const routes: Routes = [
{path:'',component: RegisterComponent},
{path:'login', component: LoginComponent},
{
  path: 'admin',
  component:IndexComponent,
  children: [
    {path:'', component: DashboardComponent},
    {path: 'tables',component: TablesComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
