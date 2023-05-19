import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepService } from 'src/app/service/dep.service';

@Component({
  selector: 'app-dep',
  templateUrl: './dep.component.html',
  styleUrls: ['./dep.component.css']
})
export class DepComponent {
  title: any;
  id: any;
  dep: any[]=[];
  findedDep: any;
  page = 1;
  pageSize = 4;

  constructor(private fb: FormBuilder, private activateRouter: ActivatedRoute, private router: Router, private dService: DepService) { }

  ngOnInit(): void {
    this.title = "Dashboard Departement";

    this.getAllDeps();



  }
  getAllDeps() {
    this.dService.getAllDeps().subscribe(
      (data:any) => {
        this.dep = data;
      }
    );
  }
  displaydep(id: any) {
    this.router.navigate([`displaydep/${id}`]);
  }
  editdep(id: any) {
    this.router.navigate([`addDep/${id}`]);


  }
  deletedep(id: any) {
    this.dService.deleteDep(id).subscribe(
      () => {
        console.log('Dep delete');
        this.getAllDeps();
      });
  }
  addDep(){
    this.router.navigate(['addDep']);
   }
}
