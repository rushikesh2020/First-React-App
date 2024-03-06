// import reactLogo from "./react.png";
import reactLogo from "../public/react.png";

export default function Header() {
	return (
		<header>
			<nav className="nav">
				<img src={reactLogo} alt="" />
				<ul className="list">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
}
