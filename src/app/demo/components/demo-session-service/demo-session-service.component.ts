import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-demo-session-service',
  templateUrl: './demo-session-service.component.html',
  styleUrls: ['./demo-session-service.component.scss']
})
export class DemoSessionServiceComponent implements OnInit {

  public username! :string;

  constructor(private _sessionStorage : SessionStorageService) { }

  ngOnInit(): void {
    this.username = this._sessionStorage.get('username');
  }

}
