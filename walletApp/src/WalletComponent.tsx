import React from 'react';
import ReactDOM from 'react-dom/client';
import Wallet from './Wallet';

class WalletComponent {
  static create(Component: React.FC, elementName: string) {
    class WebComponent extends HTMLElement {
      private root: ReactDOM.Root | null = null;

      constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const container = document.createElement('div');
        shadowRoot.appendChild(container);
        this.root = ReactDOM.createRoot(container);
      }

      connectedCallback() {
        this.root?.render(<Component />);
      }

      disconnectedCallback() {
        this.root?.unmount();
      }
    }

    customElements.define(elementName, WebComponent);
  }
}

WalletComponent.create(Wallet, 'wallet-component');