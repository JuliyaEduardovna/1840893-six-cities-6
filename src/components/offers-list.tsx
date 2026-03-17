import { useState } from 'react';
import Card from './card';
import { Offer } from '../types/offer.type';

type OffersListProps = {
  offers: Offer[];
};

export default function OffersList({ offers }: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  return (
    <div
      className="cities__places-list places__list tabs__content"
      data-active-offer-id={activeOfferId ? activeOfferId : ''}
    >
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseEnter={() => setActiveOfferId(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
        />
      ))}
    </div>
  );
}

