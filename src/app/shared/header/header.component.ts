import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogInComponent } from 'src/app/dialoges/log-in/log-in.component';
import { SignUpComponent } from 'src/app/dialoges/sign-up/sign-up.component';
import { ForgotPasswordComponent } from 'src/app/dialoges/forgot-password/forgot-password.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  token: string;
  constructor(public dialog: MatDialog, public _router: Router) {}

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    this.token = localStorage.getItem('token');
    this.token ? false : true;
  }

  openLogInDialog() {
    const dialogRef = this.dialog.open(LogInComponent);

    dialogRef
      .afterClosed()
      .pipe()
      .subscribe((result) => {
        console.log(result);
      });
  }

  openSignUpModel() {
    const dialogRef = this.dialog.open(SignUpComponent);

    dialogRef
      .afterClosed()
      .pipe()
      .subscribe((result) => {});
  }

  openForgotPasswordDialog() {
    const dialogRef = this.dialog.open(ForgotPasswordComponent);

    dialogRef
      .afterClosed()
      .pipe()
      .subscribe((result) => console.log(result));
  }
}
