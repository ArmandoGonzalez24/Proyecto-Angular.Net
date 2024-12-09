import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { Roles, RolesId } from './authorities-constants';
import { Router } from '@angular/router';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'token';
  private readonly ROLE_KEY = 'role';
  private readonly apiUrl = '/api';

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

  public isLoggedIn$: Observable<boolean> =
    this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body: IUser = { username, password };

    return this.http
      .post<{ token: string }>(`${this.apiUrl}/Login/login`, body, { headers })
      .pipe(
        tap((response) => {
          localStorage.setItem(this.TOKEN_KEY, response.token);
          this.isLoggedInSubject.next(true);

          // llamar a la api de profile y guardar el role en el local storage
          this.profile().subscribe((res) => {
            localStorage.setItem(this.ROLE_KEY, res.role!);
          });
        }),
        map(() => true),
        catchError(() => of(false))
      );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.ROLE_KEY);
    this.isLoggedInSubject.next(false);
  }

  register(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body: IUser = { username, password, roleId: RolesId.USER };

    return this.http
      .post<{ token: string }>(`${this.apiUrl}/Login/register`, body, {
        headers,
      })
      .pipe(
        tap((response) => {
          console.log('Respuesta del Register', response);
        }),
        map(() => true),
        catchError(() => of(false))
      );
  }

  profile(): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/Users/profile`).pipe(
      tap((response) => {
        console.log('Respuesta del profile', response);
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAdmin(): boolean {
    return localStorage.getItem(this.ROLE_KEY) === Roles.ADMIN;
  }
}
