import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	const [color2, setColor2] = useState("");
	const [color3, setColor3] = useState("");

	function cambiaColor() {
		color === "" ? setColor("ilumina") : setColor("");
		setColor2("");
		setColor3("");
	}

	function cambiaColor2() {
		color2 === "" ? setColor2("ilumina") : setColor2("");
		setColor("");
		setColor3("");
	}

	function cambiaColor3() {
		color3 === "" ? setColor3("ilumina") : setColor3("");
		setColor("");
		setColor2("");
	}
	function aleatorio() {
		if ((color === "") & (color2 === "") & (color3 === "")) {
			setColor("ilumina");
		} else if (color === "ilumina") {
			setColor("");
			setColor2("ilumina");
		} else if (color2 === "ilumina") {
			setColor2("");
			setColor3("ilumina");
		} else if (color3 === "ilumina") {
			setColor3("");
			setColor("ilumina");
		}
	}

	return (
		<>
			<div>
				<h1 className="text-center mt-5">Semaforo!</h1>
			</div>
			<div
				id="semaforo"
				className="bg-dark d-flex-column m-auto p-2 rounded-3">
				<div
					id="verde"
					className={"rounded-circle bg-success m-auto p-2 " + color}
					onClick={cambiaColor}></div>
				<div
					id="naranja"
					className={"rounded-circle bg-warning m-auto p-2 " + color2}
					onClick={cambiaColor2}></div>
				<div
					id="rojo"
					className={"rounded-circle bg-danger m-auto p-2 " + color3}
					onClick={cambiaColor3}></div>
			</div>
			<div>
				<button
					type="button"
					onClick={aleatorio}
					class="btn btn-outline-success">
					Switch
				</button>
			</div>
		</>
	);
};

export default Home;
