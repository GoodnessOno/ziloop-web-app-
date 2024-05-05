import React from "react";
import { Header, Navbar, Brand } from "./components";
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
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/ziloop" element={<Ziloop />} />
				<Route path="/blog" element={<Blog />} />
			</Routes>
		</Router>
    <Header />
    </div>
      <Brand />
    </div>
	);
}

export default App;

