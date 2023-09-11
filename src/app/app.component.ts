import { Component, OnInit } from '@angular/core';
import { MoviedbService } from './services/moviedb.service';
import { Movie } from './services/moviedb.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tareaS8services';

  movies: Movie[] = [];

  gettingMovies: boolean = true;

  constructor(private movieService: MoviedbService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe({
      next: resp => {
        console.log(resp.results);
        this.movies = resp.results;
        this.gettingMovies = false;
      }
    });
  }

}
