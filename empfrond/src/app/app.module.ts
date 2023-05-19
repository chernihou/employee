import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DisplayEmployeeComponent } from './components/display-employee/display-employee.component';
import { AddDepComponent } from './components/add-dep/add-dep.component';
import { DepComponent } from './components/dep/dep.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayDepComponent } from './components/display-dep/display-dep.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientComponent } from './components/client/client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    AddEmployeeComponent,
    EmployeeComponent,
    DisplayEmployeeComponent,
    AddDepComponent,
    DepComponent,
    DisplayDepComponent,
    AddClientComponent,
    ClientComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
