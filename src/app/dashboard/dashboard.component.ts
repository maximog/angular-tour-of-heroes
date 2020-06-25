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
  selectedHero$: Observable<Hero>;

  constructor(
    private heroService: HeroService,
    private store: Store<fromRoot.AppState>
  ) {
    this.selectedHero$ = this.store.select(fromRoot.getSelectedHero);
  }

  ngOnInit() {
    this.getHeroes();
    console.log(this.selectedHero$);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.store.dispatch(new heroActions.HeroesSaved({ heroes }));
      console.log(this.store);
      return (this.heroes = heroes.slice(1, 5));
    });
  }
}
