import { Component, Inject, OnInit } from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    // public matchPassword: MatchPassword,
    @Inject(MAT_DIALOG_DATA) public dialog: SignUpComponent,
    public dialogRef: MatDialogRef<SignUpComponent> // private userService: UserService
  ) {}

  ngOnInit(): void {
    this.signUpFormMethod();
  }

  signUpFormMethod() {
    return (this.signUpForm = this.fb.group(
      {
        name: [
          '',
          [
            Validators.minLength(3),
            Validators.maxLength(20),
            Validators.required,
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
      }
      // {
      //   validator: [this.matchPassword.validate],
      // }
    ));
  }

  signUpUser() {
    console.log('---->', this.signUpForm.value);
    if (this.signUpForm.invalid) {
      return;
    }
  }

  closeSignUpDialog() {
    this.dialogRef.close();
  }
}
