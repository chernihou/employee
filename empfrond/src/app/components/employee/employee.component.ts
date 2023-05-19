import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  title: any;
  id: any;
  employee: any[]=[];
  findedEmployee: any;
  closeResult: string | undefined;
  addEmployeeForm: FormGroup | undefined;
  page = 1;
  pageSize = 4;

  constructor(private fb: FormBuilder, private activateRouter: ActivatedRoute,
     private router: Router, public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.title = "Dashboard Employee";

    this.getAllEmployees();


  }
  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      (data:any) => {
        this.employee = data;
      }
    );
  }
  displayEmployee(id: any) {
    this.router.navigate([`displayEmployee/${id}`]);
  }
  editEmployee(id: any) {
    this.router.navigate([`editEmployee/${id}`]);
  }
  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe(
      () => {
        console.log('Employee delete');
        this.getAllEmployees();
      });
  }
  addOrEdit(e: any) {

    if (this.id) {
      this.employeeService.editEmployee(this.employee).subscribe(
        () => {
          console.log('Employee edit');
          this.router.navigate(['Employees']);

        }
      );

    }
    else {
      this.employeeService.addEmployee(e).subscribe(
        () => {
          console.log('Employee add');
          this.router.navigate(['Employees']);

        }
      )


    }
  }
  addEmployee(){
   this.router.navigate(['addEmployee']);
  }


}

