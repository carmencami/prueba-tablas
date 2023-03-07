import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


export class User {
	constructor( public email: string){}	
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
	constructor( private _router: Router){}

	login(email:string){
    sessionStorage.setItem('email',email)
    this._router.navigate(['/filtros'])
  }


  isUserLogged() : boolean {
    return !!sessionStorage.getItem('email')
  }
  getLoggedUser() : string {
    return sessionStorage.getItem('email') || ''  }

}