import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterUsersComponent } from './starter-users.component';

describe('StarterUsersComponent', () => {
  let component: StarterUsersComponent;
  let fixture: ComponentFixture<StarterUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
