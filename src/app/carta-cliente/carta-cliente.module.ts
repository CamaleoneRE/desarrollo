import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaClientePageRoutingModule } from './carta-cliente-routing.module';

import { CartaClientePage } from './carta-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaClientePageRoutingModule
  ],
  declarations: [CartaClientePage]
})
export class CartaClientePageModule {}
