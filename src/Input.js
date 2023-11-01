import React from 'react';
import { useState } from 'react';
import QRCode from 'qrcode';

export default function Input() {
    	const [url, setUrl] = useState('');
	const [qr, setQr] = useState('');

	// generating qrcode with size and color, if qrcode can't be generated it returns error
	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#3d0c02',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	};

	// returns physical qrcode to download and to see a preview
	return (
		
		<div className="app">
			<h1>QR Generator</h1>
			<input 
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} />
					
			<button onClick={GenerateQRCode}>Generate</button>
			{qr && <>
				<img src={qr} />
				<a href={qr} download="qrcode.png">Download</a>
			</>}
		</div>
			 
	);
}
