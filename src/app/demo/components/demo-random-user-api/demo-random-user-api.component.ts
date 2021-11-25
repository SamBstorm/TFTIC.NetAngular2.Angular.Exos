import { Component, OnInit } from '@angular/core';
import { IRandomUser } from 'src/app/models/irandom-user';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-demo-random-user-api',
  templateUrl: './demo-random-user-api.component.html',
  styleUrls: ['./demo-random-user-api.component.scss']
})
export class DemoRandomUserAPIComponent implements OnInit {

  public user! : IRandomUser;

  constructor(private _rndUser : RandomUserService) { }

  ngOnInit(): void {
    this._rndUser.getOne().subscribe(
      {
        next: data => {this.user = data},
        error : console.error,
        complete : ()=>console.log('fini')
      }
    );
  }

}
