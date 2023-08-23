import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.interface';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private servProduct:ProductService,
    private servCart:CartService) {

   }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = this.servProduct.getProducts().find(product => product.id === productIdFromRoute);
  }
  addToCart(prod:Product){
      this.servCart.addToCart(prod);
      alert('Your product has been added to the cart!');
  }

}
