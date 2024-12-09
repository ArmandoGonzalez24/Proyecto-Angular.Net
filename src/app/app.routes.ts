import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { ProductoDetailComponent } from './productos/producto-detail/producto-detail.component';
import { ProductoUpdateComponent } from './productos/producto-update/producto-update.component';
import { ProductoListComponent } from './productos/producto-list/producto-list.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { adminGuard } from './admin.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'productos',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: ProductoListComponent,
      },
      {
        path: ':id/detail',
        component: ProductoDetailComponent,
      },
      {
        path: ':id/edit',
        component: ProductoUpdateComponent,
      },
      {
        path: 'new',
        component: ProductoUpdateComponent,
      },
    ],
  },
  { path: 'carrito', component: CarritoComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [adminGuard],
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
];
