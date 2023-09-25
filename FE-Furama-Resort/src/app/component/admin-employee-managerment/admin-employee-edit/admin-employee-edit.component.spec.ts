import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeEditComponent } from './admin-employee-edit.component';

describe('AdminEmployeeEditComponent', () => {
  let component: AdminEmployeeEditComponent;
  let fixture: ComponentFixture<AdminEmployeeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEmployeeEditComponent]
    });
    fixture = TestBed.createComponent(AdminEmployeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
