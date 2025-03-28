import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayquotesComponent } from './displayquotes/displayquotes.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DisplayquotesComponent], // ✅ Required for standalone components
  templateUrl: './app.component.html', // ✅ External HTML template
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'its320ledesma';
}
