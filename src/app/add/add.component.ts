import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  employee: Employee;
  emp: Employee = new Employee;
  // id:number;
  // name:String;
  // gender:String;
  // bloodgrp:String;
  constructor(public employeeService:EmployeeService) { }

  ngOnInit() {
  }
  addEmployee(){
    
    // this.employee={id:this.id,name:this.name,gender:this.gender,bloodgrp:this.bloodgrp};
    this.employeeService.addEmployee(this.emp);
    this.emp=new Employee;
  }
}
