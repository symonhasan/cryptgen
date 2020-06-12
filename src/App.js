import React, { Component } from "react";
import "./App.css";
import { Header, Description } from "./Components/Header";
import { SelectionArea } from "./Components/Selection";
import TextArea from "./Components/TextArea";
import {setConvertText} from "./Functions/ConvertFunctions";
import {setOriginalText} from "./Functions/InterpretFunctions";
import {selectionList} from "./Data/data";

class App extends Component {
	
	state = {
		currentInterpretAs: "Text",
		currentConvertTo: "Flipped",
		interpretAsClicked: false,
		convertToClicked: false,
		interpretedText: "The quick brown fox jumps over a lazy dogs.",
		originalText: "The quick brown fox jumps over a lazy dogs.",
		convertedText: "",
		interpretedTextLen: 0,
		convertedTextLen: 0,
	};
	
	componentDidMount() {

		const currentInterpretedText = this.state.interpretedText;
		const currentConvertTo = this.state.currentConvertTo;

		const convertedOutput = setConvertText( currentInterpretedText , currentConvertTo );

		this.setState({
			interpretedTextLen: currentInterpretedText.length,
			convertedTextLen: convertedOutput.length,
			interpretedText: currentInterpretedText,
			convertedText: convertedOutput,
		});
	}

	showSelectOptionLeft = (event) => {
		this.setState({
			interpretAsClicked: !this.state.interpretAsClicked,
			convertToClicked: false,
		});
	};

	showSelectOptionRight = (event) => {
		this.setState({
			convertToClicked: !this.state.convertToClicked,
			interpretAsClicked: false,
		});
	};

	updateInterpretedText = (event) => {
		
		this.setState({
			interpretedText: event.target.value,
			interpretedTextLen: event.target.value.length,
		});

		const currentInterpretAs = this.state.currentInterpretAs;
		const currentOriginalText = setOriginalText( event.target.value , currentInterpretAs );
		const currentConvertTo = this.state.currentConvertTo;

		const convertedOutput = setConvertText( currentOriginalText , currentConvertTo );
		this.setState({
			convertedText: convertedOutput,
			convertedTextLen: convertedOutput.length,
			originalText: currentOriginalText
		})
		
	};

	selectionClicked = (event) => {
		if (this.state.interpretAsClicked) {
			const newInterpret = event.target.getAttribute("value");
			const newOriginalText = setOriginalText( this.state.interpretedText , newInterpret );

			const newConvertedTo = setConvertText( newOriginalText , this.state.currentConvertTo );

			this.setState({
				currentInterpretAs: newInterpret,
				interpretAsClicked: false,
				originalText: newOriginalText,
				convertedText: newConvertedTo,
				convertedTextLen: newConvertedTo.length
			});
		} else if (this.state.convertToClicked) {
			const newConvert = event.target.getAttribute("value");
			const currentOriginalText = this.state.originalText;
			const convertedOutput = setConvertText( currentOriginalText , newConvert );
			this.setState({
				currentConvertTo: newConvert,
				convertToClicked: false,
				convertedText: convertedOutput,
				convertedTextLen: convertedOutput.length,
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
					leftmode={this.state.currentInterpretAs}
					rightmode={this.state.currentConvertTo}
					leftclick={this.showSelectOptionLeft}
					rightclick={this.showSelectOptionRight}
				/>
				<TextArea
					interpretedText={this.state.interpretedText}
					interpretedTextLen={this.state.interpretedTextLen}
					convertedText={this.state.convertedText}
					convertedTextLen={this.state.convertedTextLen}
					onChangeHandlerFunc={this.updateInterpretedText}
					leftmode={this.state.interpretAsClicked}
					rightmode={this.state.convertToClicked}
					list={selectionList}
					selectfunc={this.selectionClicked}
				/>
			</div>
		);
	}
}
export default App;
