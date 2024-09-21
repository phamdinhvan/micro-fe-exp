import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './Navigation';

const App: React.FC = () => {
  const [WalletComponent, setWalletComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import('walletApp/WalletComponent1')
      .then((module) => {
        setWalletComponent(() => module.default);
      })
      .catch((error) => console.error('Error loading WalletComponent:', error));
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/wallet" element={WalletComponent ? <WalletComponent /> : <div>Loading...</div>} />
          <Route path="/" element={<Navigation />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;