import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OffersPage } from './pages/OffersPage';
import { ThankYouPage } from './pages/ThankYouPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/ofertas" element={<OffersPage />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}
