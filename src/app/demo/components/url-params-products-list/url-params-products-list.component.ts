import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductDbContextService } from 'src/app/services/product-db-context.service';

@Component({
  selector: 'app-url-params-products-list',
  templateUrl: './url-params-products-list.component.html',
  styleUrls: ['./url-params-products-list.component.scss']
})
export class UrlParamsProductsListComponent implements OnInit {

  public products:Iproduct[] = [];
  public get filteredProducts():Iproduct[]{
    let result = this.products;
    result = result.filter(p=> p.currentPrice <= this._qParamsMax );
    result = result.filter(p=> p.currentPrice >= this._qParamsMin );
    return result;
  }
  public get minPrice():number { return Math.min(...this.products.map(p=>p.currentPrice))?? 0;}
  public get maxPrice():number { return Math.max(...this.products.map(p=>p.currentPrice))?? 0;}

  private get _qParamsMin():number { return this._activatedRoute.snapshot.queryParams['min'] ?? this.minPrice;}
  private get _qParamsMax():number { return this._activatedRoute.snapshot.queryParams['max'] ?? this.maxPrice;}

  public minUserPrice:number = 0;
  public maxUserPrice:number = 0;

  constructor(private _prodService : ProductDbContextService, private _router : Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this._prodService.getAll();
    this.minUserPrice = this.minPrice;
    this.maxUserPrice = this.maxPrice;
  }

  public refreshFilter():void{
    this._router.navigate(['demo','demo_10'],{queryParams:{min : this.minUserPrice, max : this.maxUserPrice}})
  }

}
