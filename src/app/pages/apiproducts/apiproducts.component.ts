import { Component } from '@angular/core';
import { ProductListComponent } from "../../components/product-list/product-list.component";
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-apiproducts',
  standalone: true,
  imports: [ProductListComponent, SliderComponent],
  templateUrl: './apiproducts.component.html',
  styleUrl: './apiproducts.component.css'
})
export class APIproductsComponent {
  
}
