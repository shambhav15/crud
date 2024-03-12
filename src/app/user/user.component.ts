import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
// import { CodService } from '../cod.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgbNavModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'], // Correct the property name to styleUrls
})
export class UserComponent {
  userForm: FormGroup; // Declare userForm as FormGroup

  constructor(public fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      age: [''],
    });
  }

  SubmitForm() {
    // this.service.AddUpdateUser(this.userForm.value).subscribe((data) => {
    //   alert('added');
    console.log();
  }

  active = 1;
}
