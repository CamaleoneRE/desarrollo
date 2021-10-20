import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogChefPageRoutingModule } from './log-chef-routing.module';

import { LogChefPage } from './log-chef.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogChefPageRoutingModule
  ],
  declarations: [LogChefPage]
})
export class LogChefPageModule {}
