import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepService {DepURL:string="http://localhost:8080/api/Departements";
constructor(private httpClient:HttpClient) { }

getAllDeps(){
  return this.httpClient.get(this.DepURL);
}
getDepById(id:number){
  return this.httpClient.get(`${this.DepURL}/${id}`);
}
addDep(dep:any){
return this.httpClient.post(this.DepURL,dep);
}
deleteDep(id:number){
  return this.httpClient.delete(`${this.DepURL}/${id}`);
}
editDep(dep:any){
  console.log('here into service', dep);
  
  return this.httpClient.put(`${this.DepURL}/${dep.id}`,dep);
}
}

