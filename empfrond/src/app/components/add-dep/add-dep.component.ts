import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepService } from 'src/app/service/dep.service';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent {
  deps: any;
  dep: any = {};
  id: any;
  addDepForm :FormGroup | undefined;
  title: string = "Add Departement";


  constructor(private fb: FormBuilder, private activateRouter: ActivatedRoute, 
    private router: Router, private dService: DepService) { }


  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.paramMap.get("id");
    if (this.id) {
      this.title = "Edit Departement";
      this.dService.getDepById(this.id).subscribe(
        (data) => {
          this.dep = data;
        }
      );
    }


    this.addDepForm = this.fb.group({
      departName: [''],
      designation: [''],
      
    })
  }

  addOrEdit(s: any) {

    if (this.id) {
      this.dService.editDep(this.dep).subscribe(
        () => {
          console.log('departement edit');
          this.router.navigate(['Departements']);

        }
      );

    }
    else {
      this.dService.addDep(s).subscribe(
        () => {
          console.log('departement add');
          this.router.navigate(['Departements']);

        }
      )


    }
  }
}
