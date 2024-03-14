import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonmanagerService {

  constructor() { 
     
  }


  data: Person[] = [
    
    { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@gmail.com", age: 30 },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@gmail.com", age: 25 },
    { id: 3, firstName: "Alice", lastName: "Johnson", email: "alice.johnson@gmail.com", age: 35 },
    { id: 4, firstName: "Bob", lastName: "Brown", email: "bob.brown@gmail.com", age: 40 }
  ];

  filteredData:Person[] = this.data;

  delete(id:number){

    this.filteredData = this.filteredData.filter(p => p.id !== id)

  }

  edit(id:number):Person | null{
 
    return this.filteredData.filter(p => p.id == id)[0];
  }


  updateData(person:Person) {
    
    this.filteredData = this.filteredData
          .map(p =>  p.age == person.age ? person : p)
    
  } 

    
}
