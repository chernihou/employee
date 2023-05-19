import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {CURL:string="http://localhost:8080/api/Clients";

constructor(private httpClient:HttpClient) { }

getAllClients(){
  return this.httpClient.get(this.CURL);
}
getClientById(id:number){
  return this.httpClient.get(`${this.CURL}/${id}`);
}
addClient(Client:any){
return this.httpClient.post(this.CURL,Client);
}
deleteClient(id:number){
  return this.httpClient.delete(`${this.CURL}/${id}`);
}
editClient(Client:any){
  console.log('here into service', Client);
  
  return this.httpClient.put(`${this.CURL}/${Client.id}`,Client);
}
}


