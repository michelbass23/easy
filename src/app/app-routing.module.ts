import { RedefinirSenhaPageModule } from './redefinir-senha/redefinir-senha.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  {path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)},
  { path: 'registro', loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)},
  { path: 'redefinir-senha', loadChildren: () => import('./redefinir-senha/redefinir-senha.module').then( m => m.RedefinirSenhaPageModule)},
  {
    path: 'bluetooh',
    loadChildren: () => import('./bluetooh/bluetooh.module').then( m => m.BluetoohPageModule)
  },
  {
    path: 'controle',
    loadChildren: () => import('./controle/controle.module').then( m => m.ControlePageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
