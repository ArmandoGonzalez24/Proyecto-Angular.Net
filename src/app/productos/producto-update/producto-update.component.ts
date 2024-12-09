import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto.model';
import { ProductosService } from '../productos.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BarRating } from 'ngx-bar-rating';
import { ICategoria } from '../../categorias/categoria.model';
import { CategoriasService } from '../../categorias/categorias.service';

@Component({
  selector: 'app-producto-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, BarRating],
  templateUrl: './producto-update.component.html',
  styleUrl: './producto-update.component.css',
})
export class ProductoUpdateComponent implements OnInit {
  producto?: IProducto | undefined;
  categorias: Array<ICategoria> = [];

  form: FormGroup = new FormGroup({
    id: new FormControl<number | undefined>(undefined),
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    price: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(0),
    ]),
    categoryId: new FormControl('', [Validators.required, Validators.min(0)]),
    score: new FormControl(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    imageUrl: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductosService,
    private categoriaService: CategoriasService
  ) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');

    this.categoriaService
      .listar()
      .subscribe((categorias: Array<ICategoria>) => {
        this.categorias = categorias;
      });

    if (Number(id) > 0) {
      this.productoService
        .detalle(Number(id))
        .subscribe((producto: IProducto) => {
          this.producto = producto;

          this.form.setValue({
            id: producto.id,
            name: producto.name,
            price: producto.price,
            categoryId: producto.categoryId,
            score: producto.score,
            imageUrl: producto.imageUrl,
          });
        });
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const producto: IProducto = this.form.value;

      if (!producto.id) {
        delete producto.id;
      }

      console.log('Formulario válido', producto);

      //
      if (producto.id) {
        this.productoService
          .actualizar(producto)
          .subscribe((producto: IProducto) => {
            console.log('Producto actualizado', producto);

            this.router.navigate(['/home']);
          });
      } else {
        this.productoService
          .crear(producto)
          .subscribe((producto: IProducto) => {
            console.log('Producto creado', producto);

            this.router.navigate(['/home']);
          });
      }
    }
  }
}
