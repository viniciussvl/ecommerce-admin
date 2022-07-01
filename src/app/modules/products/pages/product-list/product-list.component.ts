import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  public tableColumnns: string[] = ['_id', 'name', 'description', 'price', 'status', 'actions'];
  public products!: Product[];
  public totalProducts: Number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
    .subscribe({
      next: (data: any) => {
        this.products = data.products;
        console.log(this.products);
        this.totalProducts = data.totalProducts;
      },
      error: (error) => {
        console.log('deu erro');
      }
    }) 
  }

}
