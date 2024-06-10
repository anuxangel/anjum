import { Component } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent {

  addedItem: any; // This variable holds the added item

  constructor() { }

  addToCart(item: any) {
    // Logic to add item to cart
    this.addedItem = item; // Set addedItem to the added item
  }

  removeFromCart() {
    // Logic to remove item from cart
    this.addedItem = null; // Reset addedItem when item is removed
  }
}
