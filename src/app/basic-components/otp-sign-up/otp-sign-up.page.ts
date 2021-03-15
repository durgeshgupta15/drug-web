import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-otp-sign-up',
  templateUrl: './otp-sign-up.page.html',
  styleUrls: ['./otp-sign-up.page.scss'],
})
export class OtpSignUpPage implements OnInit {

  PERMISSION: any;
  simInfo: any
  cards: any

  user = {
    mobileNo: "",
    password: "1234",
    showPassword: false,
  };

  listenOTP = false;
  otpCount = 0;
  failSafeLoginListener = null;
  otpSentStatus = false;
  formSubmitted = false;

  constructor(
    public userService: UserService,
    public navCtrl: NavController,
   ) {
  }

  ngOnInit() {
  }

  sendOTP() {

    if(this.user.password == '1234'){
      this.otpSentStatus = !this.otpSentStatus;
      this.otpCount = 30;
      // this.login();
    
    }
  }

  login() {
    console.log(this.user);
    this.otpSentStatus = false;
    this.navCtrl.navigateRoot('/login-page');
  }

  otpResendActive() {
    if (this.otpCount > 0) {
      setTimeout(this.otpResendActive.bind(this, --this.otpCount), 1000);
    }
  }

  reset() {
    this.listenOTP = false;
    this.otpCount = 0;
    clearInterval(this.failSafeLoginListener);
  }

  backToLogin() {
    this.otpSentStatus = false;
  }
}
