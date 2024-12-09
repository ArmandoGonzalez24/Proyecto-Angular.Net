import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCreditCard, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ICarritoItem } from './carrito-item.model';
import { CarritoService } from './carrito.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { loadMercadoPago } from '@mercadopago/sdk-js';

declare global {
  interface Window {
    MercadoPago: any;
  }
}

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, CurrencyPipe],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent implements OnInit {
  faCreditCard = faCreditCard;
  faTrash = faTrash;

  items: ICarritoItem[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.items$.subscribe((items) => {
      this.items = items;
    });
  }

  getTotal(): number {
    return this.carritoService.getTotal();
  }

  onVaciarCarrito(): void {
    // TODO: Implementar
  }

  onPagar(): void {
    console.log('loading MercadoPago');
    loadMercadoPago().then(() => {
      console.log('MercadoPago loaded');
      const mp = new window.MercadoPago(
        'TEST-59212af4-991c-49a3-800a-10778cc66d80',
        {
          locale: 'es-AR',
        }
      );
      mp.bricks().create('wallet', 'walletBrick_container', {
        initialization: {
          preferenceId: '123456', // devuelto por la API de MercadoPago,
        },
      });
    });
  }
}
