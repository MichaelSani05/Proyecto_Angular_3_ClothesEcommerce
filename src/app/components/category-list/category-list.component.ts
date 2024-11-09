
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { ProductService } from '../../services/product.service';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-category-list',
  standalone: true,
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  imports: [CategoryCardComponent, CommonModule]
})
export class CategoryListComponent implements OnInit {
  categoryNames: string[] = [];
  categorySlugs: String[] = [];
  loading: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.loading = true;
    this.productService.getCategories().subscribe({
      next: (categories: Category[]) => {
        // Extraemos solo los nombres de las categorías
        this.categoryNames = categories.map(category => category.name);
        this.categorySlugs = categories.map(category => category.slug);
        console.log(this.categoryNames);
        console.log(this.categorySlugs);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading categories:', error);
        this.loading = false;
      }
    });
  }

}
