import React from "react";
import ReactDOM from "react-dom";

import Contador from "./component/contador";

let segundosContador = 0;

setInterval(() => {
	const seis = Math.floor(segundosContador / 100000);
	const cinco = Math.floor(segundosContador / 10000);
	const cuatro = Math.floor(segundosContador / 1000);
	const tres = Math.floor(segundosContador / 100);
	const dos = Math.floor(segundosContador / 10);
	const uno = Math.floor(segundosContador / 1);
	console.log(seis, cinco, cuatro, tres, dos, uno);

	segundosContador++;

	ReactDOM.render(
		<Contador
			posicionuno={uno}
			posiciondos={dos}
			posiciontres={tres}
			posicioncuatro={cuatro}
			posicioncinco={cinco}
			posicionseis={seis}
		/>,
		document.getElementById("app")
	);
}, 1000);
