// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, RouterLink]
})

export class ProductListComponent implements OnInit {
  category: string = '';
  products: Product[] = [];
  categorySlug: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categorySlug = params['categoryName'];
      this.category = this.categorySlug.replace("-", " ");
      this.loadProducts();
    });
  }

  loadProducts() {
    this.productService.getProductsByCategory(this.categorySlug)
      .subscribe((response: any) => {
        this.products = response.products;
      });
  }
}