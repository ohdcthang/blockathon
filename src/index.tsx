import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  init,
  AUTH_PROVIDER,
  SUPPORTED_TOMO_NETWORKS,
  THEME
} from '@ramper/viction'
import { Provider } from 'react-redux';
import { store } from './store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import { BuyTicket } from './pages/Buy';
import { TicketDetail } from './pages/TicketDetail';
import { Profile } from './pages/Profile';
import Checkout from './pages/Checkout';


init({
  appName: 'Viction Test App',
  authProviders: [
    AUTH_PROVIDER.GOOGLE,
    AUTH_PROVIDER.FACEBOOK,
    AUTH_PROVIDER.TWITTER,
    AUTH_PROVIDER.APPLE,
    AUTH_PROVIDER.EMAIL
  ],
  walletProviders: [],
  network: SUPPORTED_TOMO_NETWORKS.MAINNET,
  theme: THEME.DARK,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/buy-ticket",
    element: <BuyTicket />,
  },
  {
    path: "/ticket",
    element: <TicketDetail />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  }
]);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
