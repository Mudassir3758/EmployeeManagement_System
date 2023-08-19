import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee?: Employee[];
  
  id?:number;
 

  constructor(private EmployeeService:ServiceService,
    private router: Router) { }

  ngOnInit(): void {
     
    this.getAllemployees();
  
  
  }


 getAllemployees(){
  this.EmployeeService.getAllemployee().subscribe(data=>{
   this.employee = data ;
  })
}

onUpdaterecord(id?:number){

// console.log('id-> ', id)
this.router.navigate(["update-employee"]);
this.EmployeeService.getId(id);
}
ondeleterecird(id?:number){
  this.EmployeeService.deleteempById(id).subscribe();
  this.router.navigate(["employee"]);
  window.location.reload();
}
}
