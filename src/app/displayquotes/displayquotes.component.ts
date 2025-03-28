import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuotesService } from '../quotes.service';



type Quotes = {
  _id: string;
  author: string;
  title: string;
  quote: string;
  published: string;
  highlighted?: boolean; 
}

@Component({
  selector: 'displayquotes',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './displayquotes.component.html',
  styleUrls: ['./displayquotes.component.css']
})
export class DisplayquotesComponent implements OnInit {
  quotes: Quotes[] = []; 

  constructor(private newQuotes: QuotesService) {}

  ngOnInit() {
    this.newQuotes.Get().subscribe((quotes: Quotes[]) => {
      this.quotes = quotes.map(quote => ({
        ...quote,
        highlighted: quote.author === 'Steve Jobs'
      }));
    });
  }
}
