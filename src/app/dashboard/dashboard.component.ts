import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

//NgRx
import { Store, select } from '@ngrx/store';
import * as heroActions from '../heroes.actions';
import * as fromRoot from '../heroes.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero$: Observable<string> = this.store.pipe(
    select(fromRoot.selectSelectedHeroName)
  );
  heroesFromState$: Observable<Hero[]> = this.store.pipe(
    select(fromRoot.selectHeroes)
  );

  constructor(
    private heroService: HeroService,
    private store: Store<fromRoot.AppState>
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.store.dispatch(new heroActions.HeroesSaved({ heroes }));
      return (this.heroes = heroes.slice(1, 5));
    });
  }
}
