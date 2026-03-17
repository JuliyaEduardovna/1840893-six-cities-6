import MainPage from '../../pages/main-page/main-page';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes, Authorization } from '../../constants/constants';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import OfferPage from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';
import { Offer as OfferType } from '../../types/offer.type';

type AppProps = {
  count: number;
  offers: OfferType[];
};

export default function App({ count, offers }: AppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoutes.Root}
            element={<MainPage count={count} offers={offers} />}
          />

          <Route
            path={AppRoutes.Favorites}
            element={
              <PrivateRoute
                restrictedFor={Authorization.NoAuth}
                redirectedTo={AppRoutes.Login}
              >
                <Favorites
                  offers={offers.filter((offer) => offer.isFavorite)}
                />
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoutes.Login}
            element={
              <PrivateRoute
                restrictedFor={Authorization.Auth}
                redirectedTo={AppRoutes.Root}
              >
                <Login />
              </PrivateRoute>
            }
          />

          <Route path={`${AppRoutes.Offer}/:offerId`} element={<OfferPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
