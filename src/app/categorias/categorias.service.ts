import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoria } from './categoria.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  private readonly apiUrl = '/api';

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Array<ICategoria>> {
    return this.httpClient.get<Array<ICategoria>>(`${this.apiUrl}/Categories`);
  }

  detalle(id: number): Observable<ICategoria> {
    return this.httpClient.get<ICategoria>(`${this.apiUrl}/Categories/${id}`);
  }

  crear(categoria: ICategoria): Observable<ICategoria> {
    return this.httpClient.post<ICategoria>(
      `${this.apiUrl}/Categories`,
      categoria
    );
  }

  actualizar(categoria: ICategoria): Observable<ICategoria> {
    return this.httpClient.put<ICategoria>(
      `${this.apiUrl}/Categories/${categoria.id}`,
      categoria
    );
  }

  eliminar(id: number): Observable<ICategoria> {
    return this.httpClient.delete<ICategoria>(
      `${this.apiUrl}/Categories/${id}`
    );
  }
}
