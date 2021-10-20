import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogChefPage } from './log-chef.page';

const routes: Routes = [
  {
    path: '',
    component: LogChefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogChefPageRoutingModule {}
