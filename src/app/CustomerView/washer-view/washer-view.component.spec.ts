import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherViewComponent } from './washer-view.component';

describe('WasherViewComponent', () => {
  let component: WasherViewComponent;
  let fixture: ComponentFixture<WasherViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
