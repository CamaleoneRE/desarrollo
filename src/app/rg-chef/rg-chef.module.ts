import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RgChefPageRoutingModule } from './rg-chef-routing.module';

import { RgChefPage } from './rg-chef.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RgChefPageRoutingModule
  ],
  declarations: [RgChefPage]
})
export class RgChefPageModule {}
