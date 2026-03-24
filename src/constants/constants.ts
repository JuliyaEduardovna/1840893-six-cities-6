export const CountProposal = {
  count: 312,
};

export const AppRoutes = {
  Root: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
} as const;

export const Authorization = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
};

export const RATING_STARS = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' },
];

export type AuthStatus = typeof Authorization[keyof typeof Authorization];

export const URL_MARKER_DEFAULT = '/img/pin.svg';
