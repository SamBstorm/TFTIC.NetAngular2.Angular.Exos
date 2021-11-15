import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductDbContextService {

  private _products : Iproduct[] = [
    {ref:'NF001', name:'Ordinateur Gamer',currentPrice:999},
    {ref:'NF002', name:'Ordinateur portable',currentPrice:1199},
    {ref:'F001', name:'Viande Haché',currentPrice:9.99}
  ]

  constructor() { }

  public getAll():Iproduct[] {
    return this._products;
  }

  public getOne(id:string):Iproduct {
    return this._products.filter(p=> p.ref == id)[0];
  }
}
