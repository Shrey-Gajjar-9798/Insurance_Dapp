import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter , Routes,Route} from 'react-router-dom';
import QRCodePage from './components/QRCodePage';
import Error from "./components/Error";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/qrcode" element={<QRCodePage />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);