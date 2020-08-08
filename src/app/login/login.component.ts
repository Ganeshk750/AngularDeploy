import { Component, OnInit } from '@angular/core';
import { ILogin } from '../login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: ILogin = { userid: "sophos", password: "sophos#123" };
  loginForm: FormGroup;
  message: string;
  returnUrl: string;

  loginCounter: number = 0;

  constructor(private formBuilder: FormBuilder, 
    private router: Router,
     public authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/dashboard';
    this.authService.logout();
  }

  get f() { return this.loginForm.controls; }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    else {
      if (this.f.userid.value == this.model.userid && this.f.password.value == this.model.password) {
        console.log("Login successful");
        //this.authService.authLogin(this.model);
        this.message = "Login successful";
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.userid.value);
        this.router.navigate([this.returnUrl]);
      }
      else {
        this.message = "Please check your userid and password";
      }
    }
  }


  setLoginCounter() {
    this.loginCounter += 1;
    if(this.loginCounter === 3){
      this.loginCounter = 0;
    }
  }

}
