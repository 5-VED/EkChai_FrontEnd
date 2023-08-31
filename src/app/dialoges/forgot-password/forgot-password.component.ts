import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordGroup = new FormGroup({
    forgotPwd: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
    ]),
  });

  constructor(public dialogRef: MatDialogRef<ForgotPasswordComponent>) {}

  ngOnInit(): void {}

  forgotPassword() {
    console.log(this.forgotPasswordGroup.value);
    if (this.forgotPasswordGroup.invalid) {
      return;
    }
    return;
  }

  closeFogotPassword() {
    this.dialogRef.close();
  }
}
