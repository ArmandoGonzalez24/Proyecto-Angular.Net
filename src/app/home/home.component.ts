import { Component, OnInit } from '@angular/core';
import { ProductoGrillaComponent } from '../productos/producto-grilla/producto-grilla.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductoGrillaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
