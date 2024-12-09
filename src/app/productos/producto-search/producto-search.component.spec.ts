import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSearchComponent } from './producto-search.component';

describe('ProductoSearchComponent', () => {
  let component: ProductoSearchComponent;
  let fixture: ComponentFixture<ProductoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
