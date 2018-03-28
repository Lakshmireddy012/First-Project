import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent }   from './employee/employee.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'empdetails', component: EmployeeComponent },
  {path : 'home' ,component:AddComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
