import { createReducer } from '@reduxjs/toolkit';
import { City } from '../types/city.type';
import { Offer } from '../types/offer.type';
import { changeCity, setOffers, changeSortType } from './action';
import { CITIES } from '../constants/cities';
import { SortType } from '../components/variants-sorting/variants-sorting';

export type AppState = {
  city: City;
  offers: Offer[];
  sortType: SortType;
};

const initialCity: City = CITIES[0];

const initialState: AppState = {
  city: initialCity,
  offers: [],
  sortType: 'popular',
};

export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    });
});
