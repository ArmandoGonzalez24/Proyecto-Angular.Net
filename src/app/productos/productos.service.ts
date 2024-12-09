import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from './producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private readonly apiUrl = '/api';

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Array<IProducto>> {
    return this.httpClient.get<Array<IProducto>>(`${this.apiUrl}/Products`);
  }

  detalle(id: number): Observable<IProducto> {
    return this.httpClient.get<IProducto>(`${this.apiUrl}/Products/${id}`);
  }

  crear(producto: IProducto): Observable<IProducto> {
    return this.httpClient.post<IProducto>(`${this.apiUrl}/Products`, producto);
  }

  actualizar(producto: IProducto): Observable<IProducto> {
    return this.httpClient.put<IProducto>(
      `${this.apiUrl}/Products/${producto.id}`,
      producto
    );
  }

  eliminar(id: number): Observable<IProducto> {
    return this.httpClient.delete<IProducto>(`${this.apiUrl}/Products/${id}`);
  }
}
