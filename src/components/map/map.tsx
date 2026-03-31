import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { URL_MARKER_ACTIVE, URL_MARKER_DEFAULT } from '../../constants/constants';
import { City } from '../../types/city.type';
import { Offer } from '../../types/offer.type';
import useMap from '../hooks/useMap';

type MapProps = {
  city: City;
  offers: Offer[];
  activeOfferId: string | null;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function Map({ city, offers, activeOfferId }: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);
  const markersRef = useRef<leaflet.Marker[]>([]);

  useEffect(() => {
    if (!map) {
      return;
    }

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    offers.forEach((offer) => {
      const icon = offer.id === activeOfferId ? activeCustomIcon : defaultCustomIcon;
      const marker = leaflet
        .marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          { icon },
        )
        .addTo(map);

      markersRef.current.push(marker);
    });
  }, [map, offers, activeOfferId]);

  return (
    <div
      style={{ height: '100%' }}
      ref={mapRef}
    >
    </div>
  );
}
