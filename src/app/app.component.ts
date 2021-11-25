import { Component } from '@angular/core';
import { SessionStorageService } from './services/session-storage.service';
import { WelcomeUserService } from './services/welcome-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject';

  public userName! : string|null;

  constructor(private _usernameService : WelcomeUserService, private _sessionStorage : SessionStorageService){
    this.userName = _sessionStorage.get('username');
  }

  public saveUserName(username:string){
    if(username.length>0) {
      this._usernameService.setUsername(username);
      this.userName = this._usernameService.getUsername();
      this._sessionStorage.set('username',username);
    }
  }

}
