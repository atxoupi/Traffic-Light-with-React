import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	const [color2, setColor2] = useState("");
	const [color3, setColor3] = useState("");
	const [color4, setColor4] = useState("");
	const [morado, setMorado] = useState("");

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
	function handleMorado() {
		if (morado === "") {
			setMorado(
				<div
					id="morado"
					className={"rounded-circle m-auto p-2 ilumina"}></div>
			);
		} else setMorado("");
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
				{morado}
			</div>
			<div className="d-flex justify-content-center m-2">
				<button
					type="button"
					className="btn btn-success m-2"
					onClick={aleatorio}>
					Switch
				</button>
				<button
					type="button"
					className="btn btn-warning m-2"
					onClick={handleMorado}>
					Morado
				</button>
			</div>
		</>
	);
};

export default Home;
