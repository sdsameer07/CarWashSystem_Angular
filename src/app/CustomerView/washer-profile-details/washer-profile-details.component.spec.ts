import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherProfileDetailsComponent } from './washer-profile-details.component';

describe('WasherProfileDetailsComponent', () => {
  let component: WasherProfileDetailsComponent;
  let fixture: ComponentFixture<WasherProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherProfileDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
