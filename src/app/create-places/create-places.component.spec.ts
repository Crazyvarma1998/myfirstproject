import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlacesComponent } from './create-places.component';

describe('CreatePlacesComponent', () => {
  let component: CreatePlacesComponent;
  let fixture: ComponentFixture<CreatePlacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePlacesComponent]
    });
    fixture = TestBed.createComponent(CreatePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
