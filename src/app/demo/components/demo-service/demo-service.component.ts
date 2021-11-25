import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WelcomeUserService } from 'src/app/services/welcome-user.service';

@Component({
  selector: 'app-demo-service',
  templateUrl: './demo-service.component.html',
  styleUrls: ['./demo-service.component.scss']
})
export class DemoServiceComponent implements OnInit, OnDestroy {

  public username! : string|null;
  private _sub!: Subscription;

  constructor(private _usernameService : WelcomeUserService) { }
  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  ngOnInit(): void {
    this.username = this._usernameService.getUsername();
    this._sub = this._usernameService.username.subscribe(
      data => this.username = data,
      error=> console.error(error),
      ()=>console.log('fin service')
      );
  }

}
