import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto.model';
import { ProductosService } from '../productos.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductoSearchComponent } from '../producto-search/producto-search.component';
import { ICategoria } from '../../categorias/categoria.model';
import { CategoriasService } from '../../categorias/categorias.service';
import { combineLatest } from 'rxjs';
import {
  faEye,
  faPen,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    RouterModule,
    ProductoSearchComponent,
    FontAwesomeModule,
  ],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css',
})
export class ProductoListComponent implements OnInit {
  productos?: Array<IProducto>;
  categorias?: Array<ICategoria>;
  filteredProductos: Array<IProducto> = [];
  isAdmin = false;

  faPlus = faPlus;
  faEye = faEye;
  faPencil = faPen;
  faTrash = faTrash;

  constructor(
    private productoService: ProductosService,
    private categoriaService: CategoriasService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const categorias$ = this.categoriaService.listar();
    const productos$ = this.productoService.listar();
    this.isAdmin = this.authService.isAdmin();

    combineLatest([categorias$, productos$]).subscribe(
      ([categorias, productos]) => {
        this.categorias = categorias;
        this.productos = productos;
        this.filteredProductos = productos;
      }
    );
  }

  onDelete(producto: IProducto): void {
    if (confirm(`¿Estás seguro de eliminar el producto ${producto.name} ?`)) {
      console.log('Eliminar producto', producto.id!);
      this.productoService.eliminar(producto.id!).subscribe((response) => {
        console.log('Producto eliminado', response);
        this.productos = this.productos?.filter((p) => p.id !== producto.id!);
      });
    } else {
      console.log('Cancelar eliminación');
    }
  }

  aplicarFiltroProductos(productos: Array<IProducto>): void {
    this.filteredProductos = productos;
  }

  getNombreCategoria(id: number): string {
    const categoria = this.categorias?.find((c: ICategoria) => c.id === id);
    return categoria ? categoria.name : 'No definida';
  }
}
