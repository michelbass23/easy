import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlePageRoutingModule } from './controle-routing.module';

import { ControlePage } from './controle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlePageRoutingModule
  ],
  declarations: [ControlePage]
})
export class ControlePageModule {}
