import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent {
  title:any;
  id:any;
  employee:any;
    findedEmployee:any;
    addEmployeeForm: FormGroup | undefined;
  constructor(private fb:FormBuilder,private activateRouter:ActivatedRoute ,public employeeService: EmployeeService,private router:Router) { }
 
  ngOnInit(): void {  
    this.title=" Employee";
   this.id=this.activateRouter.snapshot.paramMap.get("id"); 
   this.employeeService.getEmployeeById(this.id).subscribe(
    (data)=>{
      this.employee=data;
    } 
   );   
   if (this.id) {
     this.title = "Edit Employee";
     this.employeeService.getEmployeeById(this.id).subscribe(
       (data) => {
         this.employee = data;
       }
     );
   }


   this.addEmployeeForm = this.fb.group({
   
    firstName: [''],
    lastName: [''],
    email: [''],
    phone: [''],
    photo: [''],
    //dob: [''],
    departement: [''],
     fonction: [''],
     salaire: ['']
   
   })
 }
 Edit(e: any) {

  if (this.id) {
    this.employeeService.editEmployee(this.employee).subscribe(
      () => {
        console.log('Employee edit');
        this.router.navigate(['Employees']);

      }
    );

  }
 }}
