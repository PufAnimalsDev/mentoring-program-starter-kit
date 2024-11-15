import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

export interface CardModel {
  title: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Get all categories</h1>
      <form >
        @for (element of data$ | async; track element) {
          <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          [id]="element"
          [value]="element"
        />
        <label class="form-check-label" [for]="element">
          {{ element }}
        </label>
          </div>
        }
      </form>
    </div>
  `,
  standalone: true,
  imports: [HttpClientModule, AsyncPipe],
})
export class AppComponent {
  httpClient: HttpClient = inject(HttpClient);
  data$: Observable<string[]> = this.httpClient.get<string[]>(
    'https://fakestoreapi.com/products/categories'
  );
}
