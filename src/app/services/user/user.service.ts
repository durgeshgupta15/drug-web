import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token = '';
  details = null;

  constructor() {
    this.token = localStorage.getItem('userToken') || '';
    this.details = JSON.parse(localStorage.getItem('User')) || null;
    console.log("User Details", this.details);
   }
}
