import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IFan } from "src/app/models/ifan";
import { FanService } from "src/app/services/fan.service";

@Injectable({
    providedIn: 'root'
  })

export class GetFanResolver implements Resolve<IFan> {

    constructor(private _fs : FanService){}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IFan | Observable<IFan> | Promise<IFan> {
        return this._fs.getOne(route.params['name']);
    }
}
