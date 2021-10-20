import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogClientePageRoutingModule } from './log-cliente-routing.module';

import { LogClientePage } from './log-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogClientePageRoutingModule
  ],
  declarations: [LogClientePage]
})
export class LogClientePageModule {}
