import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductDbContextService } from 'src/app/services/product-db-context.service';

@Component({
  selector: 'app-url-params-product',
  templateUrl: './url-params-product.component.html',
  styleUrls: ['./url-params-product.component.scss']
})
export class UrlParamsProductComponent implements OnInit {

  public product!:Iproduct;

  constructor(private _activetedRoute : ActivatedRoute, private _prodService : ProductDbContextService) { }

  ngOnInit(): void {
    let id = this._activetedRoute.snapshot.params['id'];
    this.product = this._prodService.getOne(id); 
  }

}
