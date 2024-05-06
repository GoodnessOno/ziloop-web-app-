import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import { Home, Blog, Ziloop } from "./pages";
import "./App.css";


function App() {
	return (
    <div className="App">
    <div className="gradient__bg">
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/ziloop" element={<Ziloop />} />
				<Route path="/blog" element={<Blog />} />
			</Routes>
		</Router>
    </div>
    </div>
	);
}

export default App;

