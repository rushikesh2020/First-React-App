import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import Footer from "./Footer.jsx";

function App() {
	return (
		<div>
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

// ReactDOM.createRoot(document.getElementById("root")).render(<Page />);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
