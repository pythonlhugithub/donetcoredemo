import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzacontrolComponent } from './pizzacontrol.component';

describe('PizzacontrolComponent', () => {
  let component: PizzacontrolComponent;
  let fixture: ComponentFixture<PizzacontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzacontrolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzacontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
