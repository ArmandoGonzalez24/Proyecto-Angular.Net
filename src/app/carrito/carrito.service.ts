import { Injectable, Output } from '@angular/core';
import { ICarritoItem } from './carrito-item.model';
import { IProducto } from '../productos/producto.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  // Almacen interno de los productos que los usuarios agregan al carrito de compras
  private items: ICarritoItem[] = [];

  private itemsSubject = new BehaviorSubject<ICarritoItem[]>(this.items);

  public items$ = this.itemsSubject.asObservable();

  constructor() {}

  agregarProducto(prod: IProducto, cant: number = 1) {
    console.log('agregarProducto', prod, cant);
    const existe = this.items.find((item) => item.producto.id === prod.id);

    if (existe) {
      // Si el producto no existe, lo agregamos al carrito
      existe.cantidad = cant;

      // Si cantidad es 0, eliminamos el producto del carrito
      // TODO: Implementar
    } else {
      // si el producto existe en el carrito, actualizo la cantidad
      this.items.push({ producto: prod, cantidad: cant });
      this.itemsSubject.next(this.items);
    }
  }

  eliminarProducto(producto: IProducto) {
    this.items = this.items.filter((item) => item.producto.id !== producto.id);
    this.itemsSubject.next(this.items);
  }

  vaciarCarrito() {
    this.items = [];
    this.itemsSubject.next(this.items);
  }

  getTotal(): number {
    let total = 0.0;

    for (let item of this.items) {
      total += item.producto.price * item.cantidad;
    }
    return total;
  }
}
