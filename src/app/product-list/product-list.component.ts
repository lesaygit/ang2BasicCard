import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface';
import { CartService } from '../cart.service';
import { promises } from 'fs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'

})
export class ProductListComponent implements OnInit {
  products:Product[];


  constructor(private servProduct:ProductService) {
    this.products=servProduct.getProducts();
  }

  ngOnInit(): void {
  }
  share():void{
    alert("The product has been shared!");
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
