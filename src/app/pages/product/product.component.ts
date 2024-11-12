import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product?: any

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = this.productsService.getMenProductById(+id);
    }
  }



}
