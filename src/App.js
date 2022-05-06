import React, { useEffect } from 'react';
import './styles/App.css';
import twitterLogo from './assets/twitter-logo.svg';

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {

	// Gotta make sure this is async.
	const checkIfWalletIsConnected = () => {
		// First make sure we have access to window.ethereum
		const { ethereum } = window;

		if (!ethereum) {
			console.log("Make sure you have MetaMask!");
			return
		} else {
			console.log("We have the ethereum object", ethereum);
		}
	}
	// https://media.giphy.com/media/3o6UB5RrlQuMfZp82Y/giphy.gif
	// Create a function to render if wallet is not connected yet
	const renderNotConnectedContainer = () => (
		<div className="connect-wallet-container">
			<img src="https://media.giphy.com/media/3o6UB5RrlQuMfZp82Y/giphy.gif" alt="Wallet gif" />
			<button className="cta-button connect-wallet-button">
				Connect Wallet
			</button>
		</div>
	);

	// This runs our function when the page loads.
	useEffect(() => {
		checkIfWalletIsConnected();
	}, [])

  	return (
		<div className="App">
			<div className="container">
				<div className="header-container">
					<header>
						<div className="left">
						<p className="title">👛🏷️ Wallet Name Service</p>
						<p className="subtitle">Your immortal API on the blockchain!</p>
						</div>
					</header>
				</div>

				{/* Add your render method here */}
				{renderNotConnectedContainer()}

        		<div className="footer-container">
					<img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
					<a
						className="footer-text"
						href={TWITTER_LINK}
						target="_blank"
						rel="noreferrer"
					>{`built with @${TWITTER_HANDLE}`}</a>
				</div>
			</div>
		</div>
	);
}

export default App;
