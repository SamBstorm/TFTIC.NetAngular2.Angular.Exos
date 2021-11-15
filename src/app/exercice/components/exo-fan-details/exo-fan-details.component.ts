import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFan } from 'src/app/models/ifan';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-exo-fan-details',
  templateUrl: './exo-fan-details.component.html',
  styleUrls: ['./exo-fan-details.component.scss']
})
export class ExoFanDetailsComponent implements OnInit {

  public fan! : IFan;

  constructor(private _ar : ActivatedRoute, private _fs : FanService, private _router : Router) { }

  ngOnInit(): void {
    try {
      this.fan = this._ar.snapshot.data['fan'];
    } catch (error) {
      this._router.navigate(['exos','exo_04']);
    }
  }

}
