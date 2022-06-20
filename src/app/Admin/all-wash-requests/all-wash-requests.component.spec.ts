import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWashRequestsComponent } from './all-wash-requests.component';

describe('AllWashRequestsComponent', () => {
  let component: AllWashRequestsComponent;
  let fixture: ComponentFixture<AllWashRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWashRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWashRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
