import { IProducto } from '../productos/producto.model';

export interface ICarritoItem {
  cantidad: number;
  producto: IProducto;
}
