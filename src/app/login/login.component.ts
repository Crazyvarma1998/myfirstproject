import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;

  constructor(    private formBuilder: FormBuilder,private router:Router
  ){
    
  }
  ngOnInit() {
  this.loginForm = this.formBuilder.group({
    Email: ['', [Validators.required]],
    password: ['', Validators.required]
  });
}
submitLogin(){
  this.router.navigate(["./register"])
}
}
