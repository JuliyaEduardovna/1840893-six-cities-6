import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { URL_MARKER_DEFAULT } from '../../constants/constants';
import { City } from '../../types/city.type';
import { Location } from '../../types/location.type';
import useMap from '../hooks/useMap';

type MapProps = {
  city: City;
  points: Location[];
};

export default function Map({ city, points }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.latitude,
              lng: point.longitude,
            },
            {
              icon: defaultCustomIcon,
            },
          )
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <div
      style={{ height: '100%' }}
      ref={mapRef}
    >
    </div>
  );
}
