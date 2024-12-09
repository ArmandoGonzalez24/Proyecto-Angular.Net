import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from '../../producto.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarritoService } from '../../../carrito/carrito.service';

@Component({
  selector: 'app-producto-grilla-item[producto]',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, FontAwesomeModule],
  templateUrl: './producto-grilla-item.component.html',
  styleUrl: './producto-grilla-item.component.css',
})
export class ProductoGrillaItemComponent implements OnInit {
  @Input() producto!: IProducto;
  estoyEnCarrito = false;
  cantidad = 0;

  faCartShopping = faCartShopping;
  faTrash = faTrash;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.items$.subscribe((items) => {
      const item = items.find((item) => item.producto.id === this.producto.id);

      if (item !== undefined) {
        this.cantidad = item.cantidad;
        this.estoyEnCarrito = true;
      } else {
        this.cantidad = 0;
        this.estoyEnCarrito = false;
      }
      console.log('el carrito tiene', items);
    });
  }

  agregarAlCarrito(producto: IProducto) {
    this.carritoService.agregarProducto(producto);
  }

  quitarDelCarrito(producto: IProducto) {
    this.carritoService.eliminarProducto(producto);
  }
}
