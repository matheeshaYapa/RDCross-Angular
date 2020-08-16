import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  isSubmitButtonClicked: boolean;

  genderList = new Array<string>('Male', 'Female');

  mobileCountryCodeList = new Array()

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  get signUpFormControl() {
    return this.signUpForm.controls;
  }

  initializeForm() {
    this.signUpForm = new FormGroup({
      fullName: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {validators: [Validators.minLength(7)]}),
      confirmPassword: new FormControl(null, {validators: [Validators.required, this.checkConfirmPassword.bind(this)]}),
      mobileNo: new FormControl(null, {validators: [Validators.pattern(/^((0)[0-9]{9})$/m)]}),
      gender: new FormControl(null, {validators: [Validators.required]}),
    });
  }

  checkConfirmPassword(confirmPasswordFormControl: FormControl) {
    let password = '';
    if (this.signUpForm) {
      if (this.signUpFormControl.password.value !== null) {
        password = this.signUpFormControl.password.value;
      }
    }
    if (confirmPasswordFormControl.value !== password && confirmPasswordFormControl.value !== null && confirmPasswordFormControl.value !== '') {
      return {checkConfirmPassword: true}
    }
    return null;
  }

  onSubmit() {
    this.isSubmitButtonClicked = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.router.navigate(['/']);
  }

}
