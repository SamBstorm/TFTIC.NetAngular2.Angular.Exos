import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeUserService {

  private _username! : string|null;
  public username : BehaviorSubject<string|null> = new BehaviorSubject<string|null>(this._username);
  constructor() { }

  public setUsername(newUsername : string):void{
    this._username = newUsername;
    this.username.next(this._username);
  }

  public cleanUsername():void{
    this._username = null;
    this.username.next(this._username);
  }

  public getUsername():string | null{
    return this._username;
  }
}
