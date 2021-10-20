import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaClientePage } from './carta-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: CartaClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaClientePageRoutingModule {}
