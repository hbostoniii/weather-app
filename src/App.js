import React from "react";
import Location from "./Location";
import Temperature from "./Temperature";

import "./App.css";

const App = () => {
	return (
		<div className="container">
			<Location />
			<Temperature />
		</div>
	);
};

export default App;
