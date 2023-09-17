import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoomListComponent } from './user-room-list.component';

describe('UserRoomListComponent', () => {
  let component: UserRoomListComponent;
  let fixture: ComponentFixture<UserRoomListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRoomListComponent]
    });
    fixture = TestBed.createComponent(UserRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
