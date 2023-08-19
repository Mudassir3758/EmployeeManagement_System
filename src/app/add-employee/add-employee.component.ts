import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
 employee: Employee = new Employee();
  constructor(private Employeeservice: ServiceService , private router:Router) { }

  ngOnInit(): void {
  }

  onAddEmployee(){
    console.log(this.employee)
    this.Employeeservice.AddEmployee(this.employee).subscribe();
    this.router.navigate(['employees']);
  }
}
