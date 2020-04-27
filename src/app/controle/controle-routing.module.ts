import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlePage } from './controle.page';

const routes: Routes = [
  {
    path: '',
    component: ControlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlePageRoutingModule {}
