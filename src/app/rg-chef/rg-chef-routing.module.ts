import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RgChefPage } from './rg-chef.page';

const routes: Routes = [
  {
    path: '',
    component: RgChefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RgChefPageRoutingModule {}
