import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Tutor } from '../tutor';

@Component({
  selector: 'app-tutorform',
  templateUrl: './tutorform.component.html',
  styleUrls: ['./tutorform.component.css']
})
export class TutorformComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl('')
  });

  onSubmit() {
    console.warn(this.profileForm.value as Tutor);
  }

  constructor() { }

  ngOnInit() {
  }

}
