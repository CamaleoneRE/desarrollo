import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogClientePage } from './log-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: LogClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogClientePageRoutingModule {}
