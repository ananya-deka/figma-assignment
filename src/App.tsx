import Navbar from "./components/Navbar";
import headerImg from "./assets/header-svg.svg";
import Content from "./components/Content";

function App() {
	return (
		<div className="relative w-full">
			<img className="absolute z-[-1] w-full" src={headerImg} />
			<Navbar />
			<Content />
		</div>
	);
}

export default App;
