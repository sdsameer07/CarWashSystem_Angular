import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWashRequestComponent } from './my-wash-request.component';

describe('MyWashRequestComponent', () => {
  let component: MyWashRequestComponent;
  let fixture: ComponentFixture<MyWashRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWashRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWashRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
