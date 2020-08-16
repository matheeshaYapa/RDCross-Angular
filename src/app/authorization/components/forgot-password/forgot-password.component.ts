import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  isSubmitButtonClicked: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  get forgotPasswordFormControl() {
    return this.forgotPasswordForm.controls;
  }

  initializeForm() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required, Validators.email]})
    });
  }

  onSubmit() {
    this.isSubmitButtonClicked = true;
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    this.router.navigate(['/']);
  }

}
