import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpSignUpPage } from './otp-sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: OtpSignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpSignUpPageRoutingModule {}
