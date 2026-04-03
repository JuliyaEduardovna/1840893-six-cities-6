import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { City } from '../types/city.type';
import { Offer } from '../types/offer.type';
import { SortType } from '../components/variants-sorting/variants-sorting';

export const changeCity = createAction<City>('city/change');

export const changeSortType = createAction<SortType>('sortType/change');

export const fetchOffers = createAsyncThunk<Offer[], undefined, {
  extra: AxiosInstance;
}>(
  'offers/fetch',
  async (_, { extra }) => {
    const { data } = await extra.get<Offer[]>('/offers');
    return data;
  }
);
