import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import WalletComponent from 'walletApp/WalletComponent';
import Navigation from './Navigation';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/wallet" element={<WalletComponent />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
