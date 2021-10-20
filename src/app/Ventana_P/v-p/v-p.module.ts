import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VPPageRoutingModule } from './v-p-routing.module';

import { VPPage } from './v-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VPPageRoutingModule
  ],
  declarations: [VPPage]
})
export class VPPageModule {}
