
markdown
Copia
Modifica
# ALESSANDRO PONTON'S TYPESCRIPT, REACT, AND WEB3 PROJECT

### Neoptic Clothing is a cyberpunk-style eCommerce site for futuristic clothing and gadgets. This dApp supports MetaMask connection on Ethereum and allows payments on test networks such as Rinkeby and Ropsten.

## Main Features
- **Wallet Connection**: Users can connect their wallet using MetaMask, with their ETH balance displayed in the navbar.
- **Product Purchase**: Clicking "Buy" initiates the transaction. After completion, the user is redirected to the success page.
- **Cyberpunk Interface**: A design with background videos, neon effects, and futuristic fonts for an immersive UX.

## Technologies Used
### 1. React
Used for modular and reusable components, simplifying state management and code maintainability.

### 2. Wagmi and ethers.js
- **Wagmi** simplifies wallet interactions on Ethereum, such as checking connections, fetching wallet addresses, and displaying ETH balances.
- **ethers.js** handles blockchain transactions and converts values to wei.

### 3. React Router
For internal navigation between pages.

### 4. IPFS (InterPlanetary File System)
- Product images are uploaded to IPFS, accessible via unique hashes.
- This eliminates the need for centralized servers and ensures images are permanently and securely available.

### 5. Styled Components and Cyberpunk Effects
- Neon and cyberpunk visual effects are essential for the application's aesthetic.
- Advanced CSS and styled components create neon effects for buttons, text, and backgrounds (e.g., `.glow-text`, `.btn-cyber`, `.background-video`).
- Attempted to use Tailwind but encountered compatibility issues.

### 6. Video Background
- **Choice**: A background video enhances immersion, creating a dynamic and futuristic look for the homepage.
- **Implementation**: Applied with CSS to adapt to different screen resolutions.

### 7. Responsive Design
Ensures an optimal user experience on mobile devices using media queries.

---

## Installation and Local Setup
### Prerequisites
- **Node.js**: Ensure Node.js is installed.
- **MetaMask**: Make sure the MetaMask extension is installed in your browser.
- **Test Networks**: Connect to a test network (Rinkeby or Ropsten) via MetaMask.

### Steps
#### Clone the Repository

```bash
git clone https://github.com/abtomal/Progetto-TypeScript-React-e-Web3-di-Alessandro-Ponton.git
cd Progetto-TypeScript-React-e-Web3-di-Alessandro-Ponton
```

### Install dependencies
``` bash
npm install
```

### Start the Development Server

``` bash
npm run dev
```

### Start App

Visit http://localhost:5173 in your browser and connect MetaMask to the test network.
