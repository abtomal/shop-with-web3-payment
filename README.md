# PROGETTO TYPERSCRIPT, REACT E WEB3 DI ALESSANDRO PONTON

### Neoptic Clothing è un sito di eCommerce in stile cyberpunk per abbigliamento e gadget futuristici. Questa dApp supporta la connessione con MetaMask su Ethereum e consente di effettuare pagamenti su reti di test come Rinkeby e Ropsten.

## Funzionalità Principali
Connessione al Wallet: Gli utenti possono collegare il loro wallet con MetaMask, con bilancio ETH visibile nella navbar.
Acquisto di Prodotti: Cliccando su "Buy" inizia la transazione. Dopo il completamento, l'utente viene reindirizzato alla pagina di successo.
Interfaccia Cyberpunk: Un design con video di sfondo, effetti neon e font futuristici per una UX immersiva.

## Tecnologie Utilizzate
### 1. React
Utilizzo di React per componenti modulari e riutilizzabili, facilitando la gestione dello stato e la manutenibilità del codice.
### 2. Wagmi e ethers.js
Wagmi semplifica l'interazione con i wallet Ethereum, mentre ethers.js è utilizzato per connettersi alla blockchain.
Implementazione: wagmi consente di verificare la connessione, ottenere l'indirizzo del wallet e visualizzare il bilancio di ETH. ethers.js gestisce le transazioni e converte valori in wei.
### 3. React Router
Per la navigazione interna tra le pagine.
### 4. IPFS (InterPlanetary File System)
Le immagini dei prodotti sono caricate su IPFS, consentendo di accedervi tramite il loro hash unico. Questo elimina la necessità di server centralizzati e garantisce che le immagini siano accessibili in modo permanente e sicuro.
### 5. Styled Components e Effetti Cyberpunk
Gli effetti visivi neon e cyberpunk sono essenziali per l'estetica dell'applicazione.
CSS avanzato e styled components creano effetti neon per pulsanti, testi e sfondi (es. .glow-text, .btn-cyber, .background-video).
Tentato l'utilizzo di Tailwind ma non funzionava.
### 6. Video Background
Scelta: Un video di sfondo aumenta l’immersione, creando un aspetto dinamico e futuristico per la homepage.
Implementazione: Applicato con CSS per adattarsi a diverse risoluzioni di schermo.
### 7. Responsive Design
Garantire un'esperienza utente ottimale anche su dispositivi mobili grazie alle media queries.

## Installazione e Avvio del Progetto in Locale
## Prerequisiti
Node.js: Verifica di avere Node.js installato.
MetaMask: Assicurati di avere l'estensione MetaMask installata nel browser.
Reti di Test: Connettiti a una rete di test (Rinkeby o Ropsten) tramite MetaMask.

## Passaggi
### Clona il Repository

```bash
git clone https://github.com/abtomal/Progetto-TypeScript-React-e-Web3-di-Alessandro-Ponton.git
cd neoptic-clothing
```

### Installa le Dipendenze
``` bash
npm install
```

### Avvia il Server di Sviluppo

``` bash
npm run dev
```

### Apri l'Applicazione

Visita http://localhost:5173 nel browser e collega MetaMask alla rete di test.