import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items=this.servCart.getItems();
  
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private servCart:CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    // Process checkout data here
    this.items = this.servCart.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
