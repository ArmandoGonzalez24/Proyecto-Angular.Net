import { Component, OnInit } from '@angular/core';
import { VentasService } from '../ventas.service';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class VentaListadoComponent implements OnInit{
ventas: Array <any>  =[];
constructor(private ventasservice:VentasService){}

  ngOnInit(): void {
    this.ventasservice.listar().subscribe(data => {
    this.ventas=data ??[];});
  }

}
