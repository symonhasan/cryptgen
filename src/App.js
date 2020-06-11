import React, { Component } from "react";
import "./App.css";
import { Header, Description } from "./Component/Header";
import { SelectionArea } from "./Component/Selection";
import TextArea from "./Component/TextArea";
import {convertText} from "./functions/ConvertFunctions";
import {selectionList} from "./Data/data";

class App extends Component {
	
	state = {
		currentInterpret: "Text",
		currentConvert: "Flipped",
		interpretClicked: false,
		convertClicked: false,
		inputText: "The quick brown fox jumps over 13 lazy dogs.",
		outputText: "",
		inputTextLen: 0,
		outputTextLen: 0,
	};
	
	componentDidMount() {

		const currentInputText = this.state.inputText;
		const currentConvert = this.state.currentConvert;

		const convertedOutput = convertText( currentInputText , currentConvert );

		this.setState({
			inputTextLen: currentInputText.length,
			outputTextLen: convertedOutput.length,
			inputText: currentInputText,
			outputText: convertedOutput,
		});

		console.log( this.state );
	}

	transformState = () => {
		const convertedOutput = convertText( this.state.inputText , this.state.currentConvert );
		this.setState({
			outputText: convertedOutput,
		});
		console.log( "Transform State => " , this.state );
	};

	showSelectOptionLeft = (event) => {
		this.setState({
			interpretClicked: !this.state.interpretClicked,
			convertClicked: false,
		});
	};

	showSelectOptionRight = (event) => {
		this.setState({
			convertClicked: !this.state.convertClicked,
			interpretClicked: false,
		});
	};

	updateInputText = (event) => {
		
		this.setState({
			inputText: event.target.value,
			inputTextLen: event.target.value.length,
		});
		const convertedOutput = convertText( event.target.value , this.state.currentConvert );
		this.setState({
			outputText: convertedOutput,
			outputTextLen: convertedOutput.length,
		})
		
	};

	selectionClicked = (event) => {
		if (this.state.interpretClicked) {
			const newInterpret = event.target.getAttribute("value");
			this.setState({
				currentInterpret: newInterpret,
				interpretClicked: false,
			});
		} else if (this.state.convertClicked) {
			const newConvert = event.target.getAttribute("value");
			const convertedOutput = convertText( this.state.inputText , newConvert );
			this.setState({
				currentConvert: newConvert,
				convertClicked: false,
				outputText: convertedOutput,
				outputTextLen: convertedOutput.length,
			});
		}
	};
	render() {
		return (
			<div className="App">
				<Header siteTitle="CryptGen" />
				<Description>
					This project is license under the <strong>MIT</strong> and still under active development inspired from <a href="https://v2.cryptii.com">Cryptii</a>. This site fully run into your browser therefore no contents won't sent to any kind of server. Here you can encode and decode your text between different format systems. Please note that the encryption methods offered here are very basic and therefore <strong>not considered as secure.</strong>
				</Description>
				<SelectionArea
					leftmode={this.state.currentInterpret}
					rightmode={this.state.currentConvert}
					leftclick={this.showSelectOptionLeft}
					rightclick={this.showSelectOptionRight}
				/>
				<TextArea
					inputtext={this.state.inputText}
					inputtextlen={this.state.inputTextLen}
					outputtext={this.state.outputText}
					outputtextlen={this.state.outputTextLen}
					func={this.updateInputText}
					leftmode={this.state.interpretClicked}
					rightmode={this.state.convertClicked}
					list={selectionList}
					selectfunc={this.selectionClicked}
				/>
			</div>
		);
	}
}
export default App;
