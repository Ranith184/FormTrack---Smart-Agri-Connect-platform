import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import FarmerDashboardPage from './pages/FarmerDashboardPage';
import BuyerDashboardPage from './pages/BuyerDashboardPage';
import DemandSupplyPage from './pages/DemandSupplyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/farmer-dashboard" element={<FarmerDashboardPage />} />
      <Route path="/buyer-dashboard" element={<BuyerDashboardPage />} />
      <Route path="/demand-supply" element={<DemandSupplyPage />} />
    </Routes>
  );
}

export default App;