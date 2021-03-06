import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  isSubmitButtonClicked: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {validators: [Validators.required]}),
    });
  }

  onSubmit() {
    this.isSubmitButtonClicked = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigate(['/']);
  }

}
