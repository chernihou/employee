import { Dep } from "./dep.model";

export class Employee {
    id!:number;
    firstName!: string;
    lastName!: string;
    email!:string;
    phone!: string;
    photo!:string;
   // dob!:Date;
    public  departement!:Dep;
     fonction!:string;
     salaire!:number;
}
