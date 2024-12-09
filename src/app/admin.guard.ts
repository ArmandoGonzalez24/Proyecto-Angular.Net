import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    if (authService.isAdmin()) {
      return true;
    } else {
      router.navigate(['/unauthorized']);
      return false;
    }
  } else {
    router.navigate(['/login']);
    return false;
  }
};
