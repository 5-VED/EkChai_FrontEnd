import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: LogInComponent,
    private fb: FormBuilder,
    private _router: Router,
    public dialogRef: MatDialogRef<LogInComponent>, // private userService: UserService
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.signInUser();
  }

  signInUser() {
    return (this.signInForm = this.fb.group({
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
    }));
  }

  closeLogInDialog() {
    this.dialogRef.close();
  }

  logIn() {
    if (this.signInForm.invalid) {
      return;
    }

    this.authService
      .signInUser(this.signInForm.value)
      .pipe()
      .subscribe({
        next: (response) => {
          if (response.message === 'success') {
            if (response.token) {
              const token = response.token;
              localStorage.setItem('Authorization', token);
            }
            this._router.navigateByUrl('cafe');
            this.closeLogInDialog();
          }
        },
        error: (error) => {
          console.error('error======>', error);
        },
        complete: () => console.info('Login Successfully'),
      });
  }
}


