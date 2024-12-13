import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent {
  menuItems = [
    { label: 'Inicio', path: '/home' },
    { label: 'Productos', path: '/productos' },
    { label: 'Ofertas', path: '/ofertas' },
    { label: 'Contacto', path: '/contacto' }
  ];
}
