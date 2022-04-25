import React from "react";
import propTypes from "prop-types";
import "../../styles/index.css";

function Contador(props) {
	return (
		<div className="row">
			<div className="col">
				<i className="far fa-clock"></i>
			</div>
			<div className="col">{props.posicionseis % 10}</div>
			<div className="col">{props.posicioncinco % 10}</div>
			<div className="col">{props.posicioncuatro % 10}</div>
			<div className="col">{props.posiciontres % 10}</div>
			<div className="col">{props.posiciondos % 10}</div>
			<div className="col">{props.posicionuno % 10}</div>
		</div>
	);
}

Contador.propTypes = {
	posicionuno: propTypes.number,
	posiciondos: propTypes.number,
	posiciontres: propTypes.number,
	posicioncuatro: propTypes.number,
	posicioncinco: propTypes.number,
	posicionseis: propTypes.number,
};
export default Contador;
