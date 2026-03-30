import Card from '../card/card';
import { Offer } from '../../types/offer.type';

type OffersListProps = {
  offers: Offer[];
  activeOfferId: string | null;
  onOfferHover: (offerId: string) => void;
  onOfferLeave: () => void;
};

export default function OffersList({
  offers,
  activeOfferId,
  onOfferHover,
  onOfferLeave,
}: OffersListProps): JSX.Element {
  return (
    <div
      className="cities__places-list places__list tabs__content"
      data-active-offer-id={activeOfferId ? activeOfferId : ''}
    >
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseEnter={() => onOfferHover(offer.id)}
          onMouseLeave={onOfferLeave}
        />
      ))}
    </div>
  );
}
