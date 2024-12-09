import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faC, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CarritoService } from '../carrito.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carrito-icon',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './carrito-icon.component.html',
  styleUrl: './carrito-icon.component.css',
})
export class CarritoIconComponent implements OnInit {
  faCartShopping = faCartShopping;
  cantidad = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.items$.subscribe((items) => {
      this.cantidad = items.length;
    });
  }
}
