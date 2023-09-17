import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoomDetailComponent } from './user-room-detail.component';

describe('UserRoomDetailComponent', () => {
  let component: UserRoomDetailComponent;
  let fixture: ComponentFixture<UserRoomDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRoomDetailComponent]
    });
    fixture = TestBed.createComponent(UserRoomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
