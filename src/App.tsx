import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import useWallet from './hooks/useWallet';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import ShopPage from './Products';
import SuccessPage from './SuccessPage';
import { Connector } from '@wagmi/core';
import './App.css';

// Componente che contiene la navbar e controlla se mostrarla
const NavBarWrapper = ({ isConnected, balance }: { isConnected: boolean, balance: string | null | undefined }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) return null;

  return (
    <nav className="navbar-cyber">
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/shop" className="nav-link">Catalog</Link>
        <Link to="/contact" className="nav-link">Contacts</Link>
      </div>
      
      <div className="wallet-section">
        {isConnected && balance && (
          <span className="wallet-balance">
            {Number(balance).toFixed(5)} ETH
          </span>
        )}
        <Link 
          to="/wallet-connect" 
          className="connect-wallet-btn"
        >
          {isConnected ? 'My Wallet' : 'Connect Wallet'}
        </Link>
      </div>
    </nav>
  );
};

function App() {
  const { address, isConnected, connectors, connect, disconnect, balance, isConnecting } = useWallet();

  return (
    <Router>
      <NavBarWrapper isConnected={isConnected} balance={balance} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/wallet-connect" element={
          <div className="container">
            <h2 className="glow-text">Wallet Account</h2>
            {isConnected ? (
              <div>
                <p>Status: Connected</p>
                <p>Address: {address}</p>
                <p>Balance: {Number(balance).toFixed(5)} ETH</p>
                <button onClick={() => disconnect()} className="btn-purchase">Disconnect</button>
              </div>
            ) : (
              <p>Not Connected</p>
            )}
            {!isConnected && (
              <>
                <h2 className="glow-text">Connect</h2>
                <div style={{ display: 'flex', gap: '15px', flexDirection: 'column', alignItems: 'center' }}>
                  {connectors.map((connector: Connector) => (
                    <button
                      key={connector.id}
                      onClick={() => connect(connector)}
                      className="btn-cyber"
                      disabled={isConnecting}
                    >
                      {isConnecting ? 'Connecting...' : connector.name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        } />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;