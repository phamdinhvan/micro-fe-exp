import React from "react";
import { Link } from "react-router-dom";
import { CommunicateService } from "../../shared/CommunicateService";

const Navigation: React.FC = () => {
  const handleNavigateToWallet = () => {
    CommunicateService.postMessage(
      "hello from host app",
      "http://localhost:4173"
    );
  };

  return (
    <div>
      <h1>Host App</h1>
      <nav>
        <Link to="/wallet" onClick={handleNavigateToWallet}>
          Go to Wallet App
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
