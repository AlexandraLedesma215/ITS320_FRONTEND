import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type Quotes = {
  _id: string;
  author: string;
  title: string;
  quote: string;
  published: string;
  publishedYear: number; // Add this property to store the year
}

@Injectable({
  providedIn: 'root'
})

export class QuotesService {

  constructor(private http: HttpClient) { }

  Get(): Observable<Quotes[]> {
    return this.http.get<Quotes[]>('http://localhost:5000/api/quotes/get')
      .pipe(
        map(quotes => quotes.map(quote => ({
          ...quote,
          publishedYear: new Date(quote.published).getFullYear() // Extract only the year
        })))
      );
  }
}
