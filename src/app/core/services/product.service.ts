import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<{products: Product[], totalProducts: number}> {
    return this.http.get<{products: Product[], totalProducts: number}>(environment.apiUrl + '/products');
  }
}
