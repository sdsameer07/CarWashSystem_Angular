import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherprofilesComponent } from './washerprofiles.component';

describe('WasherprofilesComponent', () => {
  let component: WasherprofilesComponent;
  let fixture: ComponentFixture<WasherprofilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherprofilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
