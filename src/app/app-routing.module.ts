import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'towing',
    loadChildren: () => import('./towing/towing.module').then( m => m.TowingPageModule)
  },
  {
    path: 'towingdriver',
    loadChildren: () => import('./towingdriver/towingdriver.module').then( m => m.TowingdriverPageModule)
  },
  {
    path: 'confirm-truck',
    loadChildren: () => import('./confirm-truck/confirm-truck.module').then( m => m.ConfirmTruckPageModule)
  },
  {
    path: 'driver-in-transit',
    loadChildren: () => import('./driver-in-transit/driver-in-transit.module').then( m => m.DriverInTransitPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
