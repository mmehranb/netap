import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServcoComponent } from './servco.component';

describe('ServcoComponent', () => {
  let component: ServcoComponent;
  let fixture: ComponentFixture<ServcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServcoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
