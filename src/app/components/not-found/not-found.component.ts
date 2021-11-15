import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy {

  private _timeout : any ;

  constructor(private _router : Router) { }

  ngOnInit(): void {
    //this._timeout = setTimeout(()=>{this._router.navigate(['demo','demo_01'])},5000)
    this._timeout = setTimeout(()=>{this._router.navigateByUrl('/demo/demo_01')},5000)
  }
  ngOnDestroy():void{
    clearTimeout(this._timeout);
    this._timeout=undefined;
  }

}
