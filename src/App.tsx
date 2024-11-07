import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect, Connector } from 'wagmi';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import ShopPage from './Products';
import SuccessPage from './SuccessPage';
import { Web3Provider } from '@ethersproject/providers';
import { formatEther } from '@ethersproject/units';

function App() {
  const { address, isConnected } = useAccount();
  const { connectors, connect, error } = useConnect();
  const { disconnect } = useDisconnect();
  const [isConnecting, setIsConnecting] = useState(false);
  const [balance, setBalance] = useState<string | null>(null);

  const handleConnect = async (connector: Connector) => {
    if (isConnecting) return;

    try {
      setIsConnecting(true);
      if (!isConnected) {
        await connect({ connector });
        const provider = new Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        
        const signer = provider.getSigner();
        const balanceInWei = await signer.getBalance();
        setBalance(formatEther(balanceInWei));
      } else {
        alert('You are already connected');
      }
    } catch (err) {
      console.error("Connection Failed:", err);
      alert('Connection Failed. Verify your wallet and retry.');
    } finally {
      setIsConnecting(false);
    }
  };

  useEffect(() => {
    const fetchBalance = async () => {
      if (isConnected) {
        const provider = new Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const balanceInWei = await signer.getBalance();
        setBalance(formatEther(balanceInWei));
      }
    };
    fetchBalance();
  }, [isConnected]);

  return (
    <Router>
      <nav className="navbar-cyber">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/shop" className="nav-link">Catalog</Link>
        <Link to="/wallet-connect" className="nav-link">Connect Wallet</Link>
        <Link to="/contact" className="nav-link">Contacts</Link>
        
        {isConnected && balance && (
          <span style={{ fontWeight:'bold', position: 'absolute', right: '50px', color: '#00ff2a' }}>
            Your Balance: {Number(balance).toFixed(5)} ETH
          </span>
        )}
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
                <p>Balance: {Number(balance).toFixed(5)} ETH</p>
                <button
                  type="button"
                  onClick={() => {
                    disconnect();
                    setBalance(null);
                  }}
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
