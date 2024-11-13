import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<any[]>([]);
  public currentDataCart$ = this.cart.asObservable();
  public isOpen = new BehaviorSubject<boolean>(false);

  constructor() { }

  public toggleCart() {
    this.isOpen.next(!this.isOpen.getValue());
  }

  public addToCart(product: any) {
    const currentCart = this.cart.getValue();
    currentCart.push(product);
    this.cart.next(currentCart);
  }

  public removeFromCart(product: any) {
    const currentCart = this.cart.getValue().filter(item => item.id !== product.id);
    this.cart.next(currentCart);
  }
}