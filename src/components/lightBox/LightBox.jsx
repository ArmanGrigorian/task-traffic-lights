import "./LightBox.scss";
import { useState } from "react";
import LightItem from "../lightItem/LightItem";
import data from "../../data/data.js";

const LightBox = () => {
	const [colors, setColors] = useState(data);
	const [idx, setIdx] = useState(1);
	const [prevIdx, setPrevIdx] = useState(0);

	function manageColor(idx) {
		setColors((prevColors) => {
			return prevColors.map((color, i) => {
				if (i === idx) color.isActive = true;
				else color.isActive = false;
				return color;
			});
		});
	}

	function handleColor(e) {
		switch (e.target.dataset.name) {
			case "button":
				if (idx < 2) setIdx((prevIdx) => prevIdx + 1);
				else setIdx(0);
				setPrevIdx(idx);
				manageColor(idx);
				break;
			case "red":
				setIdx(0);
				setPrevIdx(0);
				manageColor(0);
				break;
			case "yellow":
				setIdx(1);
				setPrevIdx(1);
				manageColor(1);
				break;
			case "green":
				setIdx(2);
				setPrevIdx(2);
				manageColor(2);
				break;
			default:
				break;
		}
	}

	return (
		<div className="lightBox" onClick={(e) => handleColor(e)}>
			{colors.map((color) => {
				return <LightItem key={color.id} info={color} />;
			})}
			<button type="button" style={{ backgroundColor: colors[prevIdx].color }} data-name="button">
				CHANGE COLOR
			</button>
		</div>
	);
};

export default LightBox;
