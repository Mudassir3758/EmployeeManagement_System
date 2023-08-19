import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  getAllemployeee:any[] =[]

 baseUrl = "http://localhost:8080/employees"
   id?: number
  constructor(private httpclient:HttpClient) { }

  getAllemployee(): Observable<Employee[]>{
return this.httpclient.get<Employee[]>(`${this.baseUrl}`);
  }
// getAllemployee(){
//   this.httpclient.get().subscribe(Responce:any)=>{
//     this.getAllemployeee = Responce ;
//   }

AddEmployee(employee?:Employee): Observable<Object>{
  return this.httpclient.post<Object>(`${this.baseUrl}`,employee)
}

getId(getId?:number){
   this.id = getId
}

getEmployeeById():Observable<Object>{
  return this.httpclient.get<Object>(`${this.baseUrl}/${this.id}`)
}
updateById(employee?:Employee): Observable<Object>{
  return this.httpclient.put<Object>(`${this.baseUrl}`,employee)
   
}

deleteempById(id?:number): Observable<Object>{
  return this.httpclient.delete<Object>(`${this.baseUrl}/${id}`)

}
}


