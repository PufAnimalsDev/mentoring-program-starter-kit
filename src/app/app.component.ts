import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

export interface FactsModel {
  readonly fact: string;
  }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, AsyncPipe],
  templateUrl: './app.component.html',
})
export class AppComponent {
  httpClient: HttpClient = inject(HttpClient); 
  data$: Observable<FactsModel> = this.httpClient.get<FactsModel>('https://catfact.ninja/fact');
}
