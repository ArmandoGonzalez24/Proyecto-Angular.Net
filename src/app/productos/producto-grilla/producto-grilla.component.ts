import { Component } from '@angular/core';
import { IProducto } from '../producto.model';
import { ProductosService } from '../productos.service';
import { CommonModule } from '@angular/common';
import { ProductoGrillaItemComponent } from './producto-grilla-item/producto-grilla-item.component';
import { ProductoSearchComponent } from '../producto-search/producto-search.component';

@Component({
  selector: 'app-producto-grilla',
  standalone: true,
  imports: [CommonModule, ProductoGrillaItemComponent, ProductoSearchComponent],
  templateUrl: './producto-grilla.component.html',
  styleUrl: './producto-grilla.component.css',
})
export class ProductoGrillaComponent {
  productos?: Array<IProducto>;
  filteredProductos: Array<IProducto> = [];

  constructor(private productoService: ProductosService) {}

  ngOnInit(): void {
    this.productoService.listar().subscribe((response) => {
      this.productos = response;
      this.filteredProductos = response;
    });
  }

  aplicarFiltroProductos(productos: Array<IProducto>): void {
    this.filteredProductos = productos;
  }
}
