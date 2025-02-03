import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ProductList from "./components/productList.js";
import store from "./redux/store.js";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import "primereact/resources/themes/lara-dark-teal/theme.css";


ReactDOM.render(
  <Provider store={store}>
    <PrimeReactProvider >
      <ProductList />
    </PrimeReactProvider>
  </Provider>,
  document.getElementById("root")
);
