import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditPlacesComponent } from './edit-places/edit-places.component';
import { CreatePlacesComponent } from './create-places/create-places.component';
import { PlaceListComponent } from './place-list/place-list.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'place-list', component:PlaceListComponent },
  { path: 'create-place', component:CreatePlacesComponent },
  { path: 'edit-place', component:EditPlacesComponent },



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
