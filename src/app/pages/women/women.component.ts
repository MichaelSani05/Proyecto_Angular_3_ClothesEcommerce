import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { ProductsService } from '../../services/products.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [SliderComponent, ProductsComponent],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {
  title: string = "Este es el titulo de mujer"
  desc: string = "Este es la desc de mujer"

  productos: Array<any>

  constructor(private productsService: ProductsService) {
    this.productos = this.productsService.getAllWomenProducts();
  }

}
