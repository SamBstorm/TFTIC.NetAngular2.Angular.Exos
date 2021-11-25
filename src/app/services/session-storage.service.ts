import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  public get(key:string):any{
    let value : any |null = sessionStorage.getItem(key);
    if(value) value = JSON.parse(value);
    return value;
  }

  public set(key:string, value:any){
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public update(key:string, value:any){
    let oldValue : any |null = sessionStorage.getItem(key);
    if(oldValue) this.set(key,value);
  }

  public delete(key:string){
    sessionStorage.removeItem(key);
  }
}
