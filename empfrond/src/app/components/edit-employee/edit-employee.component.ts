import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dep } from 'src/app/common/dep.model';
import { DepService } from 'src/app/service/dep.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  employees: any;
  employee: any = {};
  userFile:any;
  id: any;
  public imagePath:any;
  imgURL:any;
  addEmployeeForm!: FormGroup;
  title: string = "Edit Employee";
  departement:Dep [] = [];
  formdata=new FormData();
  constructor(private fb: FormBuilder, private activateRouter: ActivatedRoute, 
    private router: Router, public employeeService: EmployeeService, private dService: DepService) { }
    get f(){return this.employeeService.addEmployeeForm.controls;}

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.paramMap.get("id");
    this.dService.getAllDeps().subscribe(
      (data:any) => {
        this.departement= data;
        console.log('d',this.departement);
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

    this.employeeService.addEmployeeForm= this.fb.group({
      id: [''],
    firstName: [''],
    lastName: [''],
    email: [''],
    phone: [''],
    photo: [''],
    departement: [''],
     fonction: [''],
     salaire: ['']
    
    })
   
  }

 Edit(e:any) {
    console.log('e',e);

      this.employeeService.editEmployee(this.employee).subscribe(
        () => {
          console.log('Employee edit');
          this.router.navigate(['Employees']);

        }
      );

    }
    
    
  }

