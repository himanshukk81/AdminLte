import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersInsertComponent } from './admin-users-insert.component';

describe('AdminUsersInsertComponent', () => {
  let component: AdminUsersInsertComponent;
  let fixture: ComponentFixture<AdminUsersInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
