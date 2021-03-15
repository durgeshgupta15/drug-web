import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(public user: UserService,
    public navCtrl: NavController) { }

  canActivate() {
    if (this.user.token) {
      return true
    } else {
      this.navCtrl.navigateRoot('/login')
    }
  }
}
