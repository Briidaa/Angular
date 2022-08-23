import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Components/index/index.component';
import { AddVisitorComponent } from './pages/add-visitor/add-visitor.component';
import { CheckedinComponent } from './pages/checkedin/checkedin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResultComponent } from './pages/result/result.component';
import { TablesComponent } from './pages/tables/tables.component';
import { TenantComponent } from './pages/tenant/tenant.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'success', component: ResultComponent},
{
  path: 'admin',
  component:IndexComponent,
  children: [
    {path:'', component: DashboardComponent},
    {path: 'tables',component: TablesComponent},
    {path:'visitor/:id', component: AddVisitorComponent},
    {path:'tenant/all', component: TenantComponent},
    {path:'tenant/checkin', component: CheckedinComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
