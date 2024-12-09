import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoGrillaComponent } from './producto-grilla.component';

describe('ProductoGrillaComponent', () => {
  let component: ProductoGrillaComponent;
  let fixture: ComponentFixture<ProductoGrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoGrillaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoGrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
