import { useState, useEffect } from 'react';
import { useAccount, useConnect, useDisconnect, Connector } from 'wagmi';
import { Web3Provider } from '@ethersproject/providers';
import { formatEther } from '@ethersproject/units';

const useWallet = () => {
  const { address, isConnected } = useAccount();
  const { connectors, connect, error } = useConnect();
  const { disconnect } = useDisconnect();
  const [isConnecting, setIsConnecting] = useState(false);
  const [balance, setBalance] = useState<string | null>(null);
  const [provider, setProvider] = useState<Web3Provider | null>(null);

  useEffect(() => {
    if (window.ethereum) {
      const newProvider = new Web3Provider(window.ethereum);
      setProvider(newProvider);
    }
  }, []);

  const handleConnect = async (connector: Connector) => {
    if (isConnecting || isConnected) return;

    try {
      setIsConnecting(true);
      await connect({ connector });
      if (provider) {
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const balanceInWei = await signer.getBalance();
        setBalance(formatEther(balanceInWei));
      }
    } catch (err) {
      console.error("Connection Failed:", err);
      alert('Connection Failed. Verify your wallet and retry.');
    } finally {
      setIsConnecting(false);
    }
  };

  const fetchBalance = async () => {
    if (isConnected && provider) {
      const signer = provider.getSigner();
      const balanceInWei = await signer.getBalance();
      setBalance(formatEther(balanceInWei));
    }
  };

  useEffect(() => {
    fetchBalance();
  }, [isConnected, provider]);

  return {
    address,
    isConnected,
    connectors,
    connect: handleConnect,
    disconnect,
    balance,
    isConnecting,
    error,
  };
};

export default useWallet;
