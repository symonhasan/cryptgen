import React from "react";
import "./TextArea.css";

const TextBox = (props) => {
	return (
		<div className="">
			<textarea
				rows="12"
				onChange={props.func}
				value={props.value}
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
			<div key={index} value={select.name} className="selection" onClick={props.selectfunc}>
				<p className="selection-name" value={select.name}>{select.name}</p>
				<p className="selection-sample" value={select.name}>{select.sample}</p>
			</div>
		);
	});
};

const renderLeftSide = (props) => {
	if (props.leftmode)
		return (
			<div className="selectlist-area">
				<SelectArea list={props.list} selectfunc={props.selectfunc}></SelectArea>
			</div>
		);
	else
		return (
			<TextBox
				value={props.interpretedText}
				len={props.interpretedTextLen}
				func={props.onChangeHandlerFunc}
			/>
		);
};
const renderRightSide = (props) => {
	if (props.rightmode)
		return (
			<div className="selectlist-area">
				<SelectArea list={props.list} selectfunc={props.selectfunc}></SelectArea>
			</div>
		);
	else {
		return <TextBox value={props.convertedText} len={props.convertedTextLen} func={( e ) => { e.stopPropagation()}}/>; // warning
	}
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
