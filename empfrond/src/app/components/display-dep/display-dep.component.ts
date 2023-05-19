import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepService } from 'src/app/service/dep.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-display-dep',
  templateUrl: './display-dep.component.html',
  styleUrls: ['./display-dep.component.css']
})
export class DisplayDepComponent {
  title:any;
  id:any;
  Dep:any;
    findedDep:any;
    employee: any;
    addDepForm :FormGroup | undefined;
  constructor(private fb:FormBuilder,private activateRouter:ActivatedRoute ,private router:Router,
    private dService: DepService, private employeeService: EmployeeService) { }
  ngOnInit(): void {

 this.title=" Dep";
   this.id=this.activateRouter.snapshot.paramMap.get("id"); 
   this.dService.getDepById(this.id).subscribe(
    (data)=>{
      this.Dep=data;
      console.log('d',this.Dep)
    } 
   );   
   if (this.id) {
     this.title = "Edit Dep";
     this.dService.getDepById(this.id).subscribe(
       (data) => {
         this.Dep = data;
         console.log('d',this.Dep)
       }
     );
   }

   this.getAllEmployees();
   this.addDepForm = this.fb.group({
    departName: [''],
    designation: [''],
    employees:[''],
   })
 }
 Edit(e: any) {

  if (this.id) {
    this.dService.editDep(this.Dep).subscribe(
      () => {
        console.log('Dep edit');
        this.router.navigate(['Departements']);

      }
    );

  }

 }
 getAllEmployees() {
  this.employeeService.getAllEmployees().subscribe(
    (data) => {
      this.employee = data;
    }
  );
}}



