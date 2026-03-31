import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city.type';
import { Offer } from '../types/offer.type';
import { SortType } from '../components/variants-sorting/variants-sorting';

export const changeCity = createAction<City>('city/change');

export const setOffers = createAction<Offer[]>('offers/set');

export const changeSortType = createAction<SortType>('sortType/change');
