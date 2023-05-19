import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../common/employee.model';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {EmployeeURL:string="http://localhost:8080/api/Employees";
host:string="http://localhost:8080";
constructor(private httpClient:HttpClient) { }
public addEmployeeForm!: FormGroup;
getAllEmployees(){
  return this.httpClient.get(this.EmployeeURL);
}
getEmployeeById(id:number){
  return this.httpClient.get(`${this.EmployeeURL}/${id}`);
}
addEmployee(employee:FormData){
  console.log('here into service', employee);
return this.httpClient.post(this.EmployeeURL,employee);
}
deleteEmployee(id:number){
  return this.httpClient.delete(`${this.EmployeeURL}/${id}`);
}
editEmployee(employee:any){
  console.log('here into service', employee);
  
  return this.httpClient.put(`${this.EmployeeURL}/${employee.id}`,employee);
}

uploadFile(file: File): Observable<HttpEvent<{}>> {
  const formdata: FormData = new FormData();
  formdata.append('file', file);
  const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
      reportProgress: true,
      responseType: 'text'
  });

  return this.httpClient.request(req);
 }}


