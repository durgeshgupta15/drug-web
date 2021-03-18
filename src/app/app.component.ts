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
    { name: 'Dashboard', icon: 'home', route: '/vehicle-list' },
    { name: 'Share', icon: 'share-alt', action: 'reachUs' },
    { name: 'About Us', icon: 'download', action: 'appDownload' },
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
