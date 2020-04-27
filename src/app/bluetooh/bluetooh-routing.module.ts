import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BluetoohPage } from './bluetooh.page';

const routes: Routes = [
  {
    path: '',
    component: BluetoohPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BluetoohPageRoutingModule {}
