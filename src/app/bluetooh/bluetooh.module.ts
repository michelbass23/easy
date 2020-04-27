import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BluetoohPageRoutingModule } from './bluetooh-routing.module';

import { BluetoohPage } from './bluetooh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BluetoohPageRoutingModule
  ],
  declarations: [BluetoohPage]
})
export class BluetoohPageModule {}
