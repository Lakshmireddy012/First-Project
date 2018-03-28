import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [{id:1,name:"Lakshmi",gender:"Male",bloodgrp:"O+"},
    {id:2,name:"Shashank",gender:"Male",bloodgrp:"O+"},
    {id:3,name:"Ankur",gender:"Male",bloodgrp:"O+"},
    {id:4,name:"Thushar",gender:"Male",bloodgrp:"B+"}];
    return {employees};
  }
}
