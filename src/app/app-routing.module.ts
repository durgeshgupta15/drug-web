import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'otp-sign-up',
    pathMatch: 'full'
  },
  {
    path: 'otp-sign-up',
    loadChildren: () => import('./basic-components/otp-sign-up/otp-sign-up.module').then( m => m.OtpSignUpPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./basic-components/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
