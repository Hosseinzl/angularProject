import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCategoriesComponent } from './select-categories.component';

describe('SelectCategoriesComponent', () => {
  let component: SelectCategoriesComponent;
  let fixture: ComponentFixture<SelectCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
