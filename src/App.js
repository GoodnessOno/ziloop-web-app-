// Filename - App.js

import React from "react";
import { Navbar } from "./components";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import { Home, Blog, Ziloop } from "./pages";


function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/ziloop" element={<Ziloop />} />
				<Route path="/blog" element={<Blog />} />
			</Routes>
		</Router>
	);
}

export default App;

