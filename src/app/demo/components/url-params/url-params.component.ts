import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-url-params',
  templateUrl: './url-params.component.html',
  styleUrls: ['./url-params.component.scss']
})
export class UrlParamsComponent implements OnInit {

  public message!:string;
  public name!:string;
  public id?:number;

  constructor(private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.message = this._activatedRoute.snapshot.params['message'];
    this.name = this._activatedRoute.snapshot.params['name'];
    this.id = this._activatedRoute.snapshot.queryParams['id'];
  }

}
