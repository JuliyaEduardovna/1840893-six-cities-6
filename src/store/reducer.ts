import { createReducer } from '@reduxjs/toolkit';
import { City } from '../types/city.type';
import { Offer } from '../types/offer.type';
import { changeCity, changeSortType, fetchOffers } from './action';
import { CITIES } from '../constants/cities';
import { SortType } from '../components/variants-sorting/variants-sorting';

export type AppState = {
  city: City;
  offers: Offer[];
  sortType: SortType;
  loading: boolean;
};

const initialCity: City = CITIES[0];

const initialState: AppState = {
  city: initialCity,
  offers: [],
  sortType: 'popular',
  loading: false,
};

export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.loading = false;
      state.offers = action.payload;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.loading = false;
    });
});
