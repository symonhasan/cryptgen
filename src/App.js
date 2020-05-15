import React, { Component } from "react";
import "./App.css";
import { Header, Description } from "./Component/Header";
import { SelectionArea } from "./Component/Selection";
import TextArea from "./Component/TextArea";

class App extends Component {
	convertText = (str, mode) => {
		const flipStr = (str) => {
			let outputStr = "";
			for (let i = str.length - 1; i >= 0; i--) {
				outputStr += str[i];
			}
			return outputStr;
		};
		const toDecimal = () => {
			let outputStr = "";
			for (let i = 0; i < str.length; i++) {
				outputStr += str.charCodeAt(i) + " ";
			}
			return outputStr;
		};
		const baseConvert = (number, base) => {
			let res = "";
			while (number !== 0) {
				let ld = Math.floor(number % base);
				if( ld > 9 ){
					ld = String.fromCharCode( ld + 55 );
				}
				console.log( ld );
				res += ld;
				number = Math.floor(number / base);
			}
			res = flipStr(res);
			return res;
		};
		const toBinary = (str) => {
			let outputStr = "";
			for (let i = 0; i < str.length; i++) {
				outputStr += baseConvert(str.charCodeAt(i), 2);
				outputStr += " ";
			}
			return outputStr;
		};
		const toOctal = (str) => {
			let outputStr = "";
			for (let i = 0; i < str.length; i++) {
				outputStr += baseConvert(str.charCodeAt(i), 8);
				outputStr += " ";
			}
			return outputStr;
		};
		const toHexa = (str) => {
			let outputStr = "";
			for (let i = 0; i < str.length; i++) {
				outputStr += baseConvert(str.charCodeAt(i), 16);
				outputStr += " ";
			}
			return outputStr;
		};

		switch (mode) {
			case "Flipped":
				return flipStr(str);
			case "Decimal":
				return toDecimal();
			case "Binary":
				return toBinary(str);
			case "Octal":
				return toOctal(str);
			case "Hexadecimal":
				return toHexa(str);
			default:
				return this.state.inputText;
		}
	};

	state = {
		currentInterpret: "Text",
		currentConvert: "Flipped",
		interpretClicked: false,
		convertClicked: false,
		inputText: "The quick brown fox jumps over 13 lazy dogs.",
		inputTextLen: 0,
		outputTextLen: 0,
	};
	selectionList = [
		{
			name: "Text",
			sample: "The quick brown fox jumps over 13 lazy dogs.",
		},
		{
			name: "Flipped",
			sample: ".sgod yzal 31 revo spmuj xof nworb kciuq ehT",
		},
		{
			name: "Decimal",
			sample:
				"84 104 101 32 113 117 105 99 107 32 98 114 111 119 110 32 102 111 120 32 106 117 109 112 115 32 111 118 101 114 32 49 51 32 108 97 122 121 32 100 111 103 115 46",
		},
		{
			name: "Binary",
			sample:
				"01010100 01101000 01100101 00100000 01110001 01110101 01101001 01100011 01101011 00100000 01100010 01110010 01101111 01110111 01101110 00100000 01100110 01101111 01111000 00100000 01101010 01110101 01101101 01110000 01110011 00100000 01101111 01110110 01100101 01110010 00100000 00110001 00110011 00100000 01101100 01100001 01111010 01111001 00100000 01100100 01101111 01100111 01110011 00101110",
		},
		{
			name: "Octal",
			sample:
				"124 150 145 40 161 165 151 143 153 40 142 162 157 167 156 40 146 157 170 40 152 165 155 160 163 40 157 166 145 162 40 61 63 40 154 141 172 171 40 144 157 147 163 56",
		},
		{
			name: "Hexadecimal",
			sample:
				"54 68 65 20 71 75 69 63 6b 20 62 72 6f 77 6e 20 66 6f 78 20 6a 75 6d 70 73 20 6f 76 65 72 20 31 33 20 6c 61 7a 79 20 64 6f 67 73 2e",
		},
	];
	UNSAFE_componentWillMount() {
		this.setState({
			outputText: this.convertText(
				this.state.inputText,
				this.state.currentConvert
			),
		});
	}
	componentDidMount() {
		this.setState({
			inputTextLen: this.state.inputText.length,
			outputTextLen: this.state.outputText.length,
		});
	}

	transformState = () => {
		this.setState({
			outputText: this.convertText(
				this.state.inputText,
				this.state.currentConvert
			),
		});
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
			inputTextLen: this.state.inputText.length,
			outputText: this.convertText(
				event.target.value,
				this.state.currentConvert
			),
			outputTextLen: this.state.outputText.length,
		});
		// console.log( this.state );
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
			this.setState({
				currentConvert: newConvert,
				convertClicked: false,
				outputText: this.convertText(this.state.inputText, newConvert),
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
					list={this.selectionList}
					selectfunc={this.selectionClicked}
				/>
			</div>
		);
	}
}
export default App;
