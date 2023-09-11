import { Component, Input } from '@angular/core';
import { Movie } from '../services/moviedb.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() movie!: Movie
}
