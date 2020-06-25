import { Hero } from './hero';
import { HeroActions, HeroesActionTypes } from './heroes.actions';
import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

// export interface AppState { heroes: Heroes}

export interface AppState {
  heroes: Hero[];
  selectedHero: Hero;
}

export const initialHeroes = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

export const initialState: AppState = {
  heroes: initialHeroes,
  selectedHero: { id: 11, name: 'Dr Nice' },
};

export const selectHero = (state): AppState => state.hero;

export const selectHeroes = createSelector(
  selectHero,
  (state: AppState) => state.heroes
);

export const selectSelectedHero = createSelector(
  selectHero,
  (state: AppState) => state.selectedHero
);

export const selectSelectedHeroName = createSelector(
  selectSelectedHero,
  (state: Hero) => {
    return state?.name;
  }
);

export function heroesReducer(
  state = initialState,
  action: HeroActions
): AppState {
  switch (action.type) {
    case HeroesActionTypes.HeroesSaved:
      return {
        ...state,
        heroes: action.payload.heroes,
      };
    case HeroesActionTypes.SelectedHeroSaved:
      return {
        ...state,
        selectedHero: action.payload.selectedHero,
      };
    default:
      return state;
  }
}
