import { Component, OnInit } from '@angular/core';
import { IFan } from 'src/app/models/ifan';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-exo-fan-list',
  templateUrl: './exo-fan-list.component.html',
  styleUrls: ['./exo-fan-list.component.scss']
})
export class ExoFanListComponent implements OnInit {

  public fans : IFan[] = [];

  constructor(private _fanService : FanService) { }

  ngOnInit(): void {
    this.fans = this._fanService.getAll();
  }

  public deleteFan(name:string){
    this._fanService.delete(name);
    this.fans = this._fanService.getAll();
  }

}
