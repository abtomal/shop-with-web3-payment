import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect, Connector } from 'wagmi';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import ShopPage from './Products';
import { Web3Provider } from '@ethersproject/providers';
import SuccessPage from './SuccessPage';

function App() {
  const { address, isConnected } = useAccount();
  const { connectors, connect, error } = useConnect();
  const { disconnect } = useDisconnect();
  const [isConnecting, setIsConnecting] = useState(false); // Nuova variabile di stato

  const handleConnect = async (connector: Connector) => {
    // Evita di fare una nuova richiesta se è già in corso
    if (isConnecting) return;

    try {
      setIsConnecting(true); // Imposta lo stato di connessione in corso
      if (!isConnected) {
        await connect({ connector });
        const provider = new Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
      } else {
        alert('You are already connected');
      }
    } catch (err) {
      console.error("Connessione fallita:", err);
      alert('Connessione fallita. Verifica il tuo wallet e riprova.');
    } finally {
      setIsConnecting(false); // Resetta lo stato di connessione
    }
  };

  return (
    <Router>
      <nav className="navbar-cyber">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/shop" className="nav-link">Catalog</Link>
        <Link to="/wallet-connect" className="nav-link">Connect Wallet</Link>
        <Link to="/contact" className="nav-link">Contacts</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/wallet-connect" element={
          <div className="container" style={{ marginTop: '100px' }}>
            <h2 className="glow-text" style={{ fontSize: '2rem', marginBottom: '20px' }}>Wallet Account</h2>
            {isConnected ? (
              <div style={{ marginBottom: '20px' }}>
                <p>Status: Connected</p>
                <p>Address: {address}</p>
                <button
                  type="button"
                  onClick={() => disconnect()}
                  className="btn-purchase"
                  style={{
                    padding: '10px 20px',
                    fontSize: '1rem',
                    marginTop: '15px',
                  }}
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <p>Not Connected</p>
            )}

            {/* Sezione "Connect" visibile solo se non connesso */}
            {!isConnected && (
              <>
                <h2 className="glow-text" style={{ fontSize: '2rem', marginBottom: '15px' }}>Connect</h2>
                <div style={{ display: 'flex', gap: '15px', flexDirection: 'column', alignItems: 'center' }}>
                  {connectors.map((connector) => (
                    <button
                      key={connector.id}
                      onClick={() => handleConnect(connector)}
                      type="button"
                      className="btn-cyber"
                      style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        cursor: 'pointer',
                      }}
                      disabled={isConnecting} 
                    >
                      {isConnecting ? 'Connecting...' : connector.name}
                    </button>
                  ))}
                </div>
              </>
            )}
            {error && <p style={{ color: 'black', marginTop: '10px' }}>{error.message}</p>}
          </div>
        } />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
