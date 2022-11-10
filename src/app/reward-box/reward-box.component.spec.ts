import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardBoxComponent } from './reward-box.component';

describe('RewardBoxComponent', () => {
  let component: RewardBoxComponent;
  let fixture: ComponentFixture<RewardBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
