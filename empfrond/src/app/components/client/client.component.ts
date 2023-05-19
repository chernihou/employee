
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  title: any;
  id: any;
  Client: any[]=[];
  findedClient: any;
  page = 1;
  pageSize = 4;

  constructor(private fb: FormBuilder, private activateRouter: ActivatedRoute, private router: Router, private dService: ClientService) { }

  ngOnInit(): void {
    this.title = "Dashboard Client";

    this.getAllClients();



  }
  getAllClients() {
    this.dService.getAllClients().subscribe(
      (data:any) => {
        this.Client = data;
      }
    );
  }
  displayClient(id: any) {
    this.router.navigate([`displayClient/${id}`]);
  }
  editClient(id: any) {
    this.router.navigate([`addClient/${id}`]);


  }
  deleteClient(id: any) {
    this.dService.deleteClient(id).subscribe(
      () => {
        console.log('Client delete');
        this.getAllClients();
      });
  }
  addClient(){
    this.router.navigate(['addClient']);
   }
}
