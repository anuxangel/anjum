import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  selectedItem: any;
  price: string = '$0.00';

  constructor(private route: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.selectedItem = navigation?.extras.state?.['selectedItem'];
    if (this.selectedItem) {
      this.price = `$${this.selectedItem.price.toFixed(2)}`;
    }
  }

  ngOnInit(): void {
    if (this.selectedItem) {
      const artworkSelect = document.getElementById('artwork') as HTMLSelectElement;
      const priceElement = document.getElementById('price') as HTMLElement;

      artworkSelect.value = this.getArtworkValue(this.selectedItem.title);
      priceElement.textContent = this.price;
    }
  }

  getArtworkValue(title: string): string {
    switch (title) {
      case 'Abstract Painting':
        return 'artwork1';
      case 'Modern Sculpture':
        return 'artwork2';
      case 'Digital Art Print':
        return 'artwork3';
      default:
        return '';
    }
  }

  calculatePrice() {
    const artwork = (document.getElementById('artwork') as HTMLSelectElement).value;
    const priceElement = document.getElementById('price') as HTMLElement;

    switch (artwork) {
      case 'artwork1':
        priceElement.textContent = '$120.00';
        break;
      case 'artwork2':
        priceElement.textContent = '$350.00';
        break;
      case 'artwork3':
        priceElement.textContent = '$45.00';
        break;
      default:
        priceElement.textContent = '$0.00';
        break;
    }
  }

  showProceedToPay() {
    const paymentMethod = (document.getElementById('paymentMethod') as HTMLSelectElement).value;
    const proceedToPayBtn = document.getElementById('proceedToPayBtn') as HTMLElement;
    const bookBtn = document.getElementById('bookBtn') as HTMLElement;

    if (paymentMethod !== "") {
      proceedToPayBtn.style.display = "block";
    } else {
      proceedToPayBtn.style.display = "none";
    }

    if (paymentMethod !== "" && (document.getElementById('artwork') as HTMLSelectElement).value !== "") {
      bookBtn.style.display = "block";
    } else {
      bookBtn.style.display = "none";
    }
  }

  proceedToPay() {
    // Your proceed to pay logic goes here
  }

  book() {
    // Your book logic goes here
  }
}
