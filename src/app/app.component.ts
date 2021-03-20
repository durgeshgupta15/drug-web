import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

interface menu {
  name: string;
  icon: string;
  width?: string;
  action?: string;
  route?: string;
  show?: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menuColor;
  menus: menu[] = [
    { name: 'Home', icon: 'home', route: '/vehicle-list' },
    { name: 'Cart', icon: 'home', route: '/vehicle-list' },
    { name: 'My Profile', icon: 'home', route: '/vehicle-list' },
    { name: 'About Us', icon: 'download', action: 'appDownload' },
    { name: 'Terms & Condition', icon: 'download', action: 'appDownload' },
    { name: 'My Location', icon: 'download', action: 'appDownload' },
    { name: 'Hr Coins', icon: 'download', action: 'appDownload' },
    { name: 'Payment', icon: 'rupee-sign', route: '/cf-payment' },
    { name: 'Logout', icon: 'sign-out-alt', action: 'logout' },
  ]


  constructor(private menuCtrl: MenuController,
    private navCtrl: NavController) {}

  menuAction(menu: any) {
    console.log('menuAction:')
    this.menuCtrl.toggle();

    if (menu.action) {
      this[menu.action]();
      return;
    }
    this.navCtrl.navigateRoot(menu.route);
  }
}
