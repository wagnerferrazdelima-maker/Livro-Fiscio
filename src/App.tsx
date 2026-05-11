import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OffersPage } from './pages/OffersPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { Navigate } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/ofertas" element={<OffersPage />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
        {/* Catch-all route for safety */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
