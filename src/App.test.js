import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import React from "react";

test('render app', () => {
  render(
      <BrowserRouter>
          <App />
      </BrowserRouter>);
});
