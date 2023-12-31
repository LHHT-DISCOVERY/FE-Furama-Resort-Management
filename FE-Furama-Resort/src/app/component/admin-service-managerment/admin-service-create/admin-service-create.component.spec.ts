import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceCreateComponent } from './admin-service-create.component';

describe('AdminServiceCreateComponent', () => {
  let component: AdminServiceCreateComponent;
  let fixture: ComponentFixture<AdminServiceCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminServiceCreateComponent]
    });
    fixture = TestBed.createComponent(AdminServiceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
