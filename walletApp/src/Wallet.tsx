import React, { useEffect } from 'react';
import { CommunicateService } from '../../shared/CommunicateService';

const Wallet: React.FC = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'hello from host app') {
        console.log('Received message in Wallet:', event.data);
      }
    };

    CommunicateService.onMessage(handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const handleBackToHost = () => {
    CommunicateService.postMessage('hello from wallet app', 'http://localhost:4173');
  };

  return (
    <div>
      <h1>Wallet App</h1>
      <nav>
        <a href="/" style={{ cursor: 'pointer', textDecoration: 'none' }} onClick={handleBackToHost}>Go to Wallet App</a>
      </nav>
    </div>
  );
};

export default Wallet;
