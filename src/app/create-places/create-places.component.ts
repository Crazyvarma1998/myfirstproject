import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-places',
  templateUrl: './create-places.component.html',
  styleUrls: ['./create-places.component.scss']
})
export class CreatePlacesComponent {
  createplace!: FormGroup;
  submitted = false;

  constructor(    private formBuilder: FormBuilder,private router:Router
  ){
    
  }
  ngOnInit() {
  this.createplace = this.formBuilder.group({
    place: ['', [Validators.required]],
    description: ['', Validators.required],
    address: ['', Validators.required]
  });
}
submitLogin(){
  this.router.navigate(["./place-list"])
}
}
