import { Action } from '@ngrx/store';
import { Hero } from './hero';

export enum HeroesActionTypes {
  HeroesSaved = '[Heroes Module] Heroes Saved',
  SelectedHeroSaved = '[Heroes Module] Selected Hero Saved',
}

export class HeroesSaved implements Action {
  readonly type = HeroesActionTypes.HeroesSaved;
  constructor(public payload: { heroes: Hero[] }) {}
}

export class SelectedHeroSaved implements Action {
  readonly type = HeroesActionTypes.SelectedHeroSaved;
  constructor(public payload: { selectedHero: Hero }) {}
}

export type HeroActions = HeroesSaved | SelectedHeroSaved;
