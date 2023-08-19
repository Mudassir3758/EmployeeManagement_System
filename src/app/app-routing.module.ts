import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  {
    path: 'Add-employee' , component: AddEmployeeComponent
  },
  {
    path: 'employees', component: EmployeeListComponent
  },
  {
    path: 'update-employee' , component: UpdateEmployeeComponent
  },
  {
  path: '', redirectTo: 'employees' , pathMatch: 'full'
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
