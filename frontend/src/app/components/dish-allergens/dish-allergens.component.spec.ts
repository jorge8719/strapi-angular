import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishAllergensComponent } from './dish-allergens.component';

describe('DishAllergensComponent', () => {
  let component: DishAllergensComponent;
  let fixture: ComponentFixture<DishAllergensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishAllergensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishAllergensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
