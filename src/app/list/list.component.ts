import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { PersonmanagerService } from '../services/personmanager.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{


  currentPerson: Person | null = null;


  constructor(private personService: PersonmanagerService) {

  }
  ngOnInit(): void {
    this.currentPerson
  }


  get data() {

    return this.personService.filteredData;
  }

  delete(id: number) {

    this.personService.delete(id);
  }


  edit(id: number) {

    this.currentPerson = this.personService.edit(id);
  }


  updateData(person: Person) {

    this.personService.updateData(person)
  }



}
