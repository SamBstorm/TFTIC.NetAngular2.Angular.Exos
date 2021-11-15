import { Injectable } from '@angular/core';
import { IFan } from '../models/ifan';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  private _fans : IFan[] = [];

  constructor() { }

  public getAll():IFan[]{
    let result : IFan[] = [];
    for (const fan of this._fans) {
      result.push(this._cloneFan(fan));
    }
    return result;
  }

  public getOne(name:string):IFan{
    let fans: IFan[] = this._fans.filter(f=>f.name == name);
    if(fans.length <= 0) throw new Error("Pas de fan de ce nom là...");
    let result: IFan = this._cloneFan(fans[0]);
    return result;
  }

  public create(fan : IFan){
    if(this._fans.map(f=>f.name).includes(fan.name)) throw new Error("Fan already registered");
    this._fans.push(fan);
  }
  
  public update(name: string, fan : IFan){
    if(!this._fans.map(f=>f.name).includes(name)) throw new Error("Fan to update not registered");
    if(this._fans.map(f=>f.name).includes(fan.name)) throw new Error("There are a fan with a similar name registered");
    let oldValues : IFan = this._fans.filter(f=>f.name == name)[0];
    oldValues.name = fan.name;
    oldValues.birthdate = fan.birthdate;
    oldValues.titles = fan.titles;
  }

  public delete(name : string){
    if(!this._fans.map(f=>f.name).includes(name)) throw new Error("Fan to delete not registered");
    this._fans = this._fans.filter(f=>f.name != name);
  }

  private _cloneFan(fan:IFan):IFan{
    let result :IFan = {name: fan.name, birthdate : fan.birthdate, titles:[]};
    for (const title of fan.titles) {
      result.titles.push(title);
    }
    return result;
  }
}
