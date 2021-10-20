import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VPPage } from './v-p.page';

const routes: Routes = [
  {
    path: '',
    component: VPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VPPageRoutingModule {}
