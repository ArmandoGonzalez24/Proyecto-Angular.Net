import { Component } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent {
  mission = "Nuestra misión es proporcionar artículos escolares de alta calidad a todos los estudiantes, brindando una experiencia de compra conveniente y accesible.";
  vision = "Ser la librería líder en el mercado, con un enfoque en el servicio al cliente y la innovación, contribuyendo al desarrollo académico de nuestros estudiantes.";
  history = "Fundada en 1985, nuestra librería ha crecido para convertirse en una opción confiable para familias y estudiantes que buscan productos escolares de calidad a precios accesibles.";
}
