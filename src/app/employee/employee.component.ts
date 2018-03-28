import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee.service';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:Employee[]=new Array<Employee>();
  
  constructor(private employeeService: EmployeeService) {
    
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
    
   }
  
  ngOnInit() {
    
    console.log("Employee ngOninit",this.employees);
  }
  deleteEmp(index:number){
    console.log("index value",this.employees[index]);
    this.employeeService.deleteEmp(index);
  }
}
