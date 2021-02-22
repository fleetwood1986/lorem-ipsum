import React, { useState } from 'react';
import data from './data';

function App() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState([]);

	const bob = (e) => {
		e.preventDefault();

		let amount = parseInt(count);

		setText(data.slice(0, amount));
	};

	return (
		<div className="App">
			<form onSubmit={bob}>
				<input
					type="number"
					value={count}
					onChange={(e) => setCount(e.target.value)}
				/>
				<button type="submit">Gen</button>
			</form>

			{text.map((item, index) => {
				return <p key={index}>{item}</p>;
			})}
		</div>
	);
}

export default App;
