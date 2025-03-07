import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import "./index.css";
import "./style.css";
// import App from "./routes/root";
import App from './App';

import AccessoriesBike from "./routes/accessoriesBike";
import Motor from "./routes/motor";
import Home from './routes/home';
import ElectricBike from './routes/electricBike';
import IntroPage from './routes/introPage';
import Register from './routes/register';
import Policy from './routes/policy';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import OldBike from './routes/oldBike';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "motor",
        element: <Motor />,
      },
      {
        path: "oldBike",
        element: <OldBike />,
      },
      {
        path: "electricBike",
        element: <ElectricBike />,
      },
      {
        path: "accessoriesBike",
        element: <AccessoriesBike />,
      },
      {
        path: "introPage",
        element: <IntroPage />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "policy",
        element: <Policy />,
      },
    ],
  },
]);
// import "./style.css";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
