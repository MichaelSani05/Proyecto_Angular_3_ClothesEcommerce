
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
  categorySlugs: string[] = [];
  loading: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.loading = true;
    this.productService.getCategories().subscribe({
      next: (categories: Category[]) => {
        this.categoryNames = categories.map(category => category.name);
        this.categorySlugs = categories.map(category => category.slug);
        console.log(this.categoryNames);
        this.categoryNames.splice(0, 7);
        console.log(this.categoryNames);
        this.categoryNames.splice(3, 4);
        this.categoryNames.splice(5, 1);
        this.categoryNames.splice(6, 1);
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
