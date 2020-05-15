import React from "react";
import "./TextArea.css";

const TextBox = (props) => {
	return (
		<div className="">
			<textarea
				rows="12"
				onChange={props.func}
				defaultValue={props.value}
			></textarea>
			<div className="bar">
				<p>{props.len}</p>
			</div>
		</div>
	);
};
const SelectArea = (props) => {
	return props.list.map((select, index) => {
		return (
			<div key={index} className="selection">
				<p className="selection-name">{select.name}</p>
				<p className="selection-sample">{select.sample}</p>
			</div>
		);
	});
};

const renderLeftSide = (props) => {
	if (props.leftmode)
		return (
			<div className="selectlist-area">
				<SelectArea list={props.list}></SelectArea>
			</div>
		);
	else
		return (
			<TextBox
				value={props.inputtext}
				len={props.inputtextlen}
				func={props.func}
			/>
		);
};
const renderRightSide = (props) => {
	if (props.rightmode)
		return (
			<div className="selectlist-area">
				<SelectArea list={props.list}></SelectArea>
			</div>
		);
	else return <TextBox value={props.outputtext} len={props.outputtextlen} />;
};

const TextArea = (props) => {
	return (
		<div className="text-area">
			{renderLeftSide(props)}
			{renderRightSide(props)}
		</div>
	);
};
export default TextArea;
