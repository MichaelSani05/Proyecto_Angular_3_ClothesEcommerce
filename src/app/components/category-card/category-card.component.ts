import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-category-card',
  standalone: true,
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
  imports: [NgClass]
})
export class CategoryCardComponent {
  @Input() categoryName: string = '';
  categorySlug: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.categorySlug = this.categoryName.replace(" ", "-");
  }

  navigateToProducts() {
    if (this.categoryName) {
      this.router.navigate(['/category', this.categorySlug]);
    }
  }

}
