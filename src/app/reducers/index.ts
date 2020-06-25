import * as fromHeroes from '../heroes.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  hero: fromHeroes.AppState;
}

export const reducers: ActionReducerMap<AppState> = {
  hero: fromHeroes.heroesReducer,
};
