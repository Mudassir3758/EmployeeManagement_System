import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee()
  
  constructor(private router:Router, private empService:ServiceService) { }

  ngOnInit(): void {
    this.getEmployeeById();
  }

  updateEmployee(){
   console.log(this.employee)
   this.empService.updateById(this.employee).subscribe();
   this.router.navigate(["employees"])
  }
 
  getEmployeeById(){
  this.empService.getEmployeeById().subscribe(data=>
     this.employee = data
     )}
}
