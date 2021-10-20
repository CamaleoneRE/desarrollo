import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'v-p',
    pathMatch: 'full'
  },
  {
    path: 'v-p',
    loadChildren: () => import('./Ventana_P/v-p/v-p.module').then( m => m.VPPageModule)
  },
  {
    path: 'log-cliente',
    loadChildren: () => import('./log-cliente/log-cliente.module').then( m => m.LogClientePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'carta-cliente',
    loadChildren: () => import('./carta-cliente/carta-cliente.module').then( m => m.CartaClientePageModule)
  },
  {
    path: 'log-chef',
    loadChildren: () => import('./log-chef/log-chef.module').then( m => m.LogChefPageModule)
  },
  {
    path: 'rg-chef',
    loadChildren: () => import('./rg-chef/rg-chef.module').then( m => m.RgChefPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
