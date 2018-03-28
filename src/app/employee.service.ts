import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observableToBeFn } from 'rxjs/testing/TestScheduler';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {
  private heroesUrl = 'api/employees';
  employees : Employee[]=new Array<Employee>();
  constructor(private http: HttpClient) {
    console.log("constrcutor");
    this.getEmployees().subscribe(employees => this.employees = employees);
   }
 
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.heroesUrl)
    .pipe(
      tap(employees => this.log(`fetched employees`)),
      catchError(this.handleError('employees', []))
    );
  }
  addEmployee(employee:Employee){
    employee.id=this.employees.length+1;
    this.employees.push(employee);
  }
  deleteEmp(index:number){
    const id=this.employees[index].id;
    const url=`${this.heroesUrl}/${id}`;
    console.log("delete id",id);
    
    return this.http.delete<Employee>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Employee id=${id}`)),
      catchError(this.handleError<Employee>('deleteEmployee'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      console.log("inside handle error");
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log("inside log");
  }
}

export class Employee{
  constructor(){
  }
  id:number;
  name: String;
  gender: String;
  bloodgrp: String;

}