import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProducto } from '../producto.model';
import { CategoriasService } from '../../categorias/categorias.service';
import { ICategoria } from '../../categorias/categoria.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-search[productos]',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './producto-search.component.html',
  styleUrl: './producto-search.component.css',
})
export class ProductoSearchComponent implements OnInit {
  @Input() productos!: Array<IProducto>;
  @Output() productosEncontrados = new EventEmitter<Array<IProducto>>();
  filteredProductos: Array<IProducto> = [];
  searchText: string = '';
  categorias?: Array<ICategoria>;
  filteredCategorias: Array<ICategoria> = [];

  constructor(private categoriaService: CategoriasService) {}

  ngOnInit(): void {
    this.filteredProductos = this.productos;
    this.categoriaService.listar().subscribe((response) => {
      this.filteredCategorias = response;
      this.categorias = response;
    });
  }

  onSearchTextChange(): void {
    this.applyFilter();
  }

  onCategoriaChange(categoria: ICategoria): void {
    if (this.isSelected(categoria)) {
      this.filteredCategorias = this.filteredCategorias.filter(
        (c) => c.id !== categoria.id
      );
    } else {
      this.filteredCategorias.push(categoria);
    }
    console.log('agrego categoria', categoria, this.filteredCategorias);

    this.applyFilter();
  }

  applyFilter(): void {
    const term = this.searchText.toLowerCase();
    this.filteredProductos = this.productos.filter((producto: IProducto) => {
      return (
        this.filteredCategorias.some((c) => c.id === producto.categoryId) &&
        producto.name.toLowerCase().includes(term)
      );
    });

    this.productosEncontrados.emit(this.filteredProductos);
  }

  isSelected(categoria: ICategoria): boolean {
    return this.filteredCategorias.includes(categoria);
  }
}
