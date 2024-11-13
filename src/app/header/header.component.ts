import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMars, faVenus, faRectangleList, faHouse, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { NgFor, NgIf } from '@angular/common';
import { CartComponent } from '../components/cart/cart.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule, CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faMars = faMars
  faVenus = faVenus
  faRectangleList = faRectangleList
  faHouse = faHouse
  faCartShopping = faCartShopping

  constructor(private cartService: CartService) {}

  toggleCart() {
    this.cartService.toggleCart();
  }
  
}
