// shop.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  
  shopItems = [
    {
      title: 'Abstract Painting',
      description: 'A beautiful abstract painting to add to your collection.',
      price: 120.00,
      image: "assets/s1.jpg"
    },
    {
      title: 'Modern Sculpture',
      description: 'A 3D modern sculpture for your home or office.',
      price: 350.00,
      image: "assets/s2.jpg"
    },
    {
      title: 'Digital Art Print',
      description: 'A vibrant digital art print to brighten up any space.',
      price: 45.00,
      image:"assets/s3.jpg"
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  buyNow(item: any) {
    this.router.navigate(['/form'], { state: { selectedItem: item } });
}
addToCart(item: any) {
  // Add your logic to add item to cart
  console.log('Item added to cart:', item);
}
}

