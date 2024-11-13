import { Component } from '@angular/core';
import { CartService } from '../..//services/cart.service';
import { NgFor, NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [NgFor, FontAwesomeModule, NgIf, RouterLink]
})
export class CartComponent {
  public isOpen: boolean = false;
  public products: any[] = [];
  faTrashCan = faTrashCan

  constructor(private cartService: CartService) {
    this.cartService.currentDataCart$.subscribe(data => {
      this.products = data;
    });

    this.cartService.isOpen.subscribe(state => {
      this.isOpen = state;
    });
  }

  closeCart() {
    this.cartService.toggleCart();
  }

  removeFromCart(product: any){
    this.cartService.removeFromCart(product);
  }

}