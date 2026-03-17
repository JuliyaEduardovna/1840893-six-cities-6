import { City } from './city.type';
import { Location } from './location.type';
import { Host } from './host.type';

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type OfferDetails = Offer & {
  description: string;
  images: string[];
  bedrooms: number;
  maxAdults: number;
  host: Host;
  goods: string[];
};
