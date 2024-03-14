import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Person } from '../models/person';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonmanagerService } from '../services/personmanager.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit, OnChanges {


  @Input() person: Person | null = null;

  @Output() submitt = new EventEmitter<Person>;

  form: FormGroup = new FormGroup({});


  constructor(private persmanager: PersonmanagerService,
              private formBuilder: FormBuilder) { }


    ngOnInit(): void {

      this.createForm();
  
      this.form.patchValue(this.person as unknown as any )
    } 


  createForm() {

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required]],
      age: ['', Validators.required]

    });
  }



  ngOnChanges(changes: SimpleChanges): void {

    if (changes['person'].currentValue) {

      this.form.patchValue(this.person as unknown as any)
    }

  }



  submitClick() {

    if (this.person) {
      this.submitt.emit(this.form.value as Person)
    }


  }



  
}