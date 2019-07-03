import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(private CartService: CartService, 
    private formBuiler :FormBuilder,
    ) {
    this.items = this.CartService.getItems();
    this.checkoutForm = this.formBuiler.group({
      name: '',
      address: ''
    });
   }

   onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.items = this.CartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

}
