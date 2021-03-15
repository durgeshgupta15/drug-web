import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpSignUpPageRoutingModule } from './otp-sign-up-routing.module';

import { OtpSignUpPage } from './otp-sign-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpSignUpPageRoutingModule
  ],
  declarations: [OtpSignUpPage]
})
export class OtpSignUpPageModule {}
