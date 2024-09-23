import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-places',
  templateUrl: './edit-places.component.html',
  styleUrls: ['./edit-places.component.scss']
})
export class EditPlacesComponent {

  editplace!: FormGroup;
  submitted = false;

  constructor(    private formBuilder: FormBuilder,private router:Router
  ){
    
  }
  ngOnInit() {
  this.editplace = this.formBuilder.group({
    place: ['', [Validators.required]],
    description: ['', Validators.required],
    address: ['', Validators.required]
  });
}
submitLogin(){
  this.router.navigate(["./place-list"])
}
}
