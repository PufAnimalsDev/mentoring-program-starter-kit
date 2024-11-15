import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  httpClient: HttpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }
}
