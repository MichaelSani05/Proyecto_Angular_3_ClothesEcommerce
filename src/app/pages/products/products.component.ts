import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [BannerComponent, ProductListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  title: String = "Este es el titulo de productos";
  desc: String = "Esta es la descripción de productos";
}