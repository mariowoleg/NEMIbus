import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    {
        path: 'home',
        loadComponent: () =>
            import('./components/bus-home/bus-home.component').then((c) => c.BusHomeComponent)
    },
    {
        path: 'create-service',
        loadComponent: () =>
            import('./components/bus-popup/bus-popup.component').then((c) => c.BusPopupComponent)
    }
];
