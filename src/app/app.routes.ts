import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsComponent } from './pages/products/products.component';
import { MenComponent } from './pages/men/men.component';
import { WomenComponent } from './pages/women/women.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'categories', component: CategoriesComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'category', component: ProductsComponent},
    { path: 'category/:categoryName', component: ProductsComponent},
    { path: 'men', component: MenComponent},
    { path: 'women', component: WomenComponent}
];
