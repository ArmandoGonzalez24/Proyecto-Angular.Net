import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoGrillaItemComponent } from './producto-grilla-item.component';

describe('ProductoGrillaItemComponent', () => {
  let component: ProductoGrillaItemComponent;
  let fixture: ComponentFixture<ProductoGrillaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoGrillaItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoGrillaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
