import { Hero } from './hero';
import { HeroActions, HeroesActionTypes } from './heroes.actions';

export interface AppState {
  heroes: Hero[];
  selectedHero?: Hero;
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
};

export const getHeroes = (state: AppState) => state.heroes;
export const getSelectedHero = (state: AppState) => state.selectedHero;

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
