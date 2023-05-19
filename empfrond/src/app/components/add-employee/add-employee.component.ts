import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dep } from 'src/app/common/dep.model';
import { DepService } from 'src/app/service/dep.service';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  public imagePath:any;
  imgURL:any;
  userFile:any;
  employees: any;
  employee: any = {};
  id: any;
  addEmployeeForm!: FormGroup ;
  title: string = "Add Employee";
  formdata=new FormData();
  departement:Dep [] = [];
  constructor(private fb: FormBuilder, private activateRouter: ActivatedRoute, 
    private router: Router, public clientService: EmployeeService,private dService: DepService) { }
get f(){return this.clientService.addEmployeeForm.controls;}

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.paramMap.get("id");
    console.log(this.id);
    this.dService.getAllDeps().subscribe(
      (data:any) => {
        this.departement= data;
        console.log('d',this.departement);
      }
    );
  


    this.clientService.addEmployeeForm= this.fb.group({
      id: [''],
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

  add() {

    

    
      const formdata=new FormData();
      const client=this.clientService.addEmployeeForm.value;
      console.log('f',client);
      formdata.append('Employee',JSON.stringify(client));
      formdata.append('file',this.userFile);
      console.log(formdata);
      this.clientService.addEmployee(formdata).subscribe(
        () => {
          console.log('employee add');
          this.router.navigate(['Employees']);

        }
      )


    
  }
  onSelectFile(event:any) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
     // this.f['profile'].setValue(file);
 
    var mimeType = event.target.files[0].type;
    
 
    var reader = new FileReader();
    
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
     
      
    }
}
