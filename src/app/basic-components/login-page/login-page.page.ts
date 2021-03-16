import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  submitted: boolean = false;
  signupForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public router: Router) {
    this.signupForm = this.formBuilder.group({
      user_name: ['', [Validators.required]],
      user_email: ['', [Validators.required, Validators.email]],
      user_pwd: ['', [Validators.required, Validators.minLength(6)]],
      user_rePwd: ['', [Validators.required]],
    })
   }

  ngOnInit() {
  }

  get f() { return this.signupForm.controls; }

  onSubmit(){
    console.log('form is submitted');
    console.log('data is: ', this.f);
    console.log(this.signupForm.value);
    this.submitted = true;
    if(this.signupForm.invalid){
      return;
    }
    this.navCtrl.navigateForward('/home')
  }
  

}
