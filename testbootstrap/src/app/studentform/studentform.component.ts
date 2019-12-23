import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private data: DataService, ) { 
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      phoneNumber: new FormControl('', [Validators.pattern(/\d{3}-\d{3}-\d{4}/)])
    });
  
  }

  ngOnInit() {
    var profileForm = this.profileForm;
    (function() {
      window.addEventListener('load', function() {
        var forms = this.document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })(); 
  }
  
  onSubmit() {
    if (this.profileForm.status == 'VALID') {
      this.data.postData(this.profileForm.value);
    }
  }
}
