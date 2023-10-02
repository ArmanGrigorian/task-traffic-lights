/* eslint-disable react/prop-types */
import "./LightItem.scss";

const LightItem = ({ info }) => {
	return (
		<div
			className={info.isActive ? `lightItem ${info.color}` : "lightItem"}
			data-name={info.color}></div>
	);
};

export default LightItem;
