import { Injectable } from '@angular/core';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[
    {id:1,name:'Phone XL',description:'descripcion del p1',price:1000},
    {id:2,name:'Phone Mini',description:'descripcion del p2',price:900},
    {id:3,name:'Phone Standard',description:'',price:500}
  ];


  constructor() { }
  getProducts() {
    return this.products;
  };
}
