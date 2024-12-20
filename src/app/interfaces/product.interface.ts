export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    category: string;
  }
    
  export interface ProductResponse {
    products: Product[];
  }