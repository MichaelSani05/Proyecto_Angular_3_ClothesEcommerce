import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { SliderComponent } from '../../components/slider/slider.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product?: any

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private cartService: CartService) {
    
  }

  ngOnInit(): void {
    this.product = ""
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = this.productsService.getMenProductById(+id);
      if (this.product == undefined) {
        this.product = this.productsService.getWomenProductById(+id);
      }
    }
  }

  addToCart(id: any){
    this.cartService.addToCart(id);
  }


}
