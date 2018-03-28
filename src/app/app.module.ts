import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {EmployeeService} from './employee.service';
import { AddComponent } from './add/add.component'
import { AppRoutingModule }     from './app-routing.module';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule }    from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
