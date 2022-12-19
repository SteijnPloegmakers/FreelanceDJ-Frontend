import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider} from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <GoogleOAuthProvider clientId={"978816981549-ov3fi596s8gvsv4e2cv96c89msppqijp.apps.googleusercontent.com"}>
            <App />
        </GoogleOAuthProvider>
  </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
