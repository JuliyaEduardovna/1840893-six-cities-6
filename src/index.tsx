import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CountProposal } from './constants/constants';
import { mockOffers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App count={CountProposal.count} offers={mockOffers} />
  </React.StrictMode>
);
