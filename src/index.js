import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Watchlist from './components/hooks-checkpoint/Watchlist';
import Watched from './components/hooks-checkpoint/Watched';
import Add from './components/hooks-checkpoint/Add';

import { GlobalProvider } from './context/GlobalState';
import MainHeader from './components/hooks-checkpoint/MainHeader';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Watchlist/>,
//   },
//   {
//     path: "/watched",
//     element: <Watched/>,
//   },
//   {
//     path: "/add",
//     element: <Add/>,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
