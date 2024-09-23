import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loginForm!: FormGroup;
  submitted = false;

  constructor(    private formBuilder: FormBuilder,private router:Router
  ){
    
  }
  ngOnInit() {
  this.loginForm = this.formBuilder.group({
    name:['',[Validators.required]],
    Email: ['', [Validators.required]],
    password: ['', Validators.required]
  });
}
submitLogin(){
  this.router.navigate(["./"])
}
}
