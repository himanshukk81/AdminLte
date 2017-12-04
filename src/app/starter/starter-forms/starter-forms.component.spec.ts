import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterFormsComponent } from './starter-forms.component';

describe('StarterFormsComponent', () => {
  let component: StarterFormsComponent;
  let fixture: ComponentFixture<StarterFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
