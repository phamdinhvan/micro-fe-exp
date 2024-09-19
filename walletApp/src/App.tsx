import './App.css';

function App() {

  const sendMessageToHostApp = (message: string) => {
    window.parent.postMessage({ type: 'FROM_HOST', payload: message }, '*');
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => sendMessageToHostApp('Hello from Wallet App')}>
          Send Message to Host App
        </button>
      </div>
    </>
  )
}

export default App
