import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  clients: any;
  client: any = {};
  id: any;
  addClientForm :FormGroup | undefined;
  title: string = "Add Client";


  constructor(private fb: FormBuilder, private activateRouter: ActivatedRoute, 
    private router: Router, private CService: ClientService) { }


  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.paramMap.get("id");
    if (this.id) {
      this.title = "Edit Client";
      this.CService.getClientById(this.id).subscribe(
        (data) => {
          this.client = data;
        }
      );
    }


    this.addClientForm = this.fb.group({
      nomSociete: [''],
      nomManager: [''],
      prenomManager:[''],
      adresse:[''],
      email:[''],
      phone:['']
    })
  }

  addOrEdit(s: any) {

    if (this.id) {
      this.CService.editClient(this.client).subscribe(
        () => {
          console.log('Client edit');
          this.router.navigate(['Clients']);

        }
      );

    }
    else {
      this.CService.addClient(s).subscribe(
        () => {
          console.log('Client add');
          this.router.navigate(['Clients']);

        }
      )


    }
  }
}
