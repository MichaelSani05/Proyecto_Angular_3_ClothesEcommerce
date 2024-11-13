import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [SliderComponent, ProductsComponent],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent {
  title: string = "Este es el titulo de men"
  desc: string = "Esta es la desc de men"

  productos: Array<any>

  constructor(private productsService: ProductsService) {
    this.productos = this.productsService.getAllMenProducts();
  }
  
}


