import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryInsertComponent } from './product-category-insert.component';

describe('ProductCategoryInsertComponent', () => {
  let component: ProductCategoryInsertComponent;
  let fixture: ComponentFixture<ProductCategoryInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoryInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
