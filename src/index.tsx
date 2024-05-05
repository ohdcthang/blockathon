import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
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
import { Matketplace } from './pages/Maketplace';
import { ToastContainer } from 'react-toastify';
import {
  BLOCKCHAINS_DATA,
  WalletProvider,
} from "@coin98-com/wallet-adapter-react";
import { WalletModalProvider } from "@coin98-com/wallet-adapter-react-ui";
import { Coin98WalletAdapter } from "@coin98-com/wallet-adapter-coin98";
import { MetaMaskWalletAdapter } from "@coin98-com/wallet-adapter-metamask";
import { evmChains, WalletModalC98 } from "@coin98-com/wallet-adapter-react-ui"
import '@coin98-com/wallet-adapter-react-ui/styles.css';
import { RamperWalletAdapter } from '@coin98-com/wallet-adapter-ramper';
import { BuyCrypto } from './pages/BuyCrypto';
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
    path: "/buy-token",
    element: <BuyCrypto />,
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
  },
  {
    path: "/matketplace",
    element: <Matketplace />,
  }
]);


const Coin98AdapterProvider = ({ children }: any) => {
  const enables = [BLOCKCHAINS_DATA.ethereum];
  const wallets = [Coin98WalletAdapter, MetaMaskWalletAdapter, RamperWalletAdapter];
  return (
    <WalletProvider wallets={wallets} enables={enables} autoConnect>
      <WalletModalProvider>{children}</WalletModalProvider>
    </WalletProvider>
  );
};


const Coin98AdapterModal = () => {
  const defaultChains = [...evmChains]; // multi-chain
  // const defaultChains = [tomo,ether]; // single-chain
  return <WalletModalC98 isC98Theme enableChains={defaultChains} />;
};

root.render(
    <Coin98AdapterProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
      <Coin98AdapterModal />
      <ToastContainer limit={3} />
    </Provider>
    </Coin98AdapterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
