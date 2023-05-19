import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepComponent } from './components/dep/dep.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddDepComponent } from './components/add-dep/add-dep.component';
import { DisplayEmployeeComponent } from './components/display-employee/display-employee.component';
import { DisplayDepComponent } from './components/display-dep/display-dep.component';
import { ClientComponent } from './components/client/client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
const routes: Routes = [
  {path:'',component:DashboardComponent},
    {path:'Dashboard',component:DashboardComponent},
    {path:'Departements',component:DepComponent},
    {path:'Employees',component:EmployeeComponent},
    {path:'addEmployee',component:AddEmployeeComponent},
    {path:'addDep',component:AddDepComponent},
    {path:'editEmployee/:id',component:EditEmployeeComponent},
    {path:'displayEmployee/:id',component:DisplayEmployeeComponent},
    {path:'addDep/:id',component:AddDepComponent},
    {path:'displaydep/:id',component:DisplayDepComponent},
    {path:'Clients',component:ClientComponent},
    {path:'addClient',component:AddClientComponent},
];


@NgModule({
  declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
