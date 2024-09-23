import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent {
  constructor(private roter:Router){}
  createplace(){
    this.roter.navigate(['./create-place'])
  }
}
