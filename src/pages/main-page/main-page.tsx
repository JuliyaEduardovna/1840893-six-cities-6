import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import VariantsSorting, { SortType } from '../../components/variants-sorting/variants-sorting';
import Spinner from '../../components/spinner/spinner';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CITIES } from '../../constants/cities';
import { changeCity, changeSortType } from '../../store/action';
import { City } from '../../types/city.type';

export default function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  const city = useSelector((state: RootState) => state.app.city);
  const allOffers = useSelector((state: RootState) => state.app.offers);
  const loading = useSelector((state: RootState) => state.app.loading);
  const sortType = useSelector((state: RootState) => state.app.sortType);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const offersByCity = allOffers.filter((offer) => offer.city.name === city.name);

  const sortedOffers = (() => {
    switch (sortType) {
      case 'priceLowToHigh':
        return [...offersByCity].sort((a, b) => a.price - b.price);
      case 'priceHighToLow':
        return [...offersByCity].sort((a, b) => b.price - a.price);
      case 'topRated':
        return [...offersByCity].sort((a, b) => b.rating - a.rating);
      case 'popular':
      default:
        return offersByCity;
    }
  })();

  const handleCityChange = (selectedCity: City) => {
    dispatch(changeCity(selectedCity));
  };

  const handleSortChange = (newSortType: SortType) => {
    dispatch(changeSortType(newSortType));
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities - Main page</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              cities={CITIES}
              currentCity={city}
              onCityChange={handleCityChange}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersByCity.length} places to stay in {city.name}
              </b>
              <VariantsSorting sortType={sortType} onSortChange={handleSortChange} />
              <OffersList
                offers={sortedOffers}
                activeOfferId={activeOfferId}
                onOfferHover={(offerId) => setActiveOfferId(offerId)}
                onOfferLeave={() => setActiveOfferId(null)}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} offers={sortedOffers} activeOfferId={activeOfferId} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
