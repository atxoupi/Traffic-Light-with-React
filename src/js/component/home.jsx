import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	function cambiaColor() {
		color === "" ? setColor("ilumina") : setColor("");
	}

	const [color2, setColor2] = useState("");
	function cambiaColor2() {
		color2 === "" ? setColor2("ilumina") : setColor2("");
	}

	const [color3, setColor3] = useState("");
	function cambiaColor3() {
		color3 === "" ? setColor3("ilumina") : setColor3("");
	}

	return (
		<>
			<div>
				<h1 className="text-center mt-5">Semaforo!</h1>
			</div>
			<div id="semaforo" className="bg-dark d-flex-column m-auto">
				<div
					id="verde"
					className={"rounded-circle m-auto " + color}
					onClick={cambiaColor}></div>
				<div
					id="naranja"
					className={"rounded-circle m-auto " + color2}
					onClick={cambiaColor2}></div>
				<div
					id="rojo"
					className={"rounded-circle m-auto " + color3}
					onClick={cambiaColor3}></div>
			</div>
		</>
	);
};

export default Home;
