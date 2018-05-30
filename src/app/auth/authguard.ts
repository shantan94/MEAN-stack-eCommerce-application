import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
  	const token = localStorage.getItem("token");
    if (token === null) {
    	this.router.navigate(['/']);
    	return false;
    }
	return true;
  }
}