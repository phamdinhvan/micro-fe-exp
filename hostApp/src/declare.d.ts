declare module "walletApp/WalletComponent1" {
  // eslint-disable-next-line
  const WalletComponent: any;
  export default WalletComponent;
}

declare namespace JSX {
  interface IntrinsicElements {
    "wallet-component": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
