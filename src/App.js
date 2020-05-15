import React, { useState } from "react";
import "./App.css";
import { Header, Description } from "./Component/Header";
import { SelectionArea } from "./Component/Selection";
import TextArea from "./Component/TextArea";

function App() {
	const convertText = (str) => {
		let str1 = "";
		for (let i = 0; i < str.length; i++) {
			if (str[i] !== " ") {
				str1 += String.fromCharCode(str.charCodeAt(i) + 5);
			} else {
				str1 += str[i];
			}
		}
		return str1;
	};

	const [currentInterpret, setInterpret] = useState("Text");
	const [currentConvert, setConvert] = useState("Flipped");

	const [interpretClicked, setInterpretClicked] = useState(false);
	const [convertClicked, setConvertClicked] = useState(false);

	const selectionList = [
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

	const [inputText, setInputText] = useState(
		"The quick brown fox jumps over 13 lazy dogs."
	);
	const [outputText, setOutputText] = useState("");

	const [inputTextLen, setInputTextLen] = useState(inputText.length);
	const [outputTextLen, setOutputTextLen] = useState(outputText.length);

	const showSelectOptionLeft = (event) => {
		// console.log( "Clicked!");
		setInterpretClicked( !interpretClicked );
		setConvertClicked(false);
	};

	const showSelectOptionRight = (event) => {
		// console.log( "Clicked!");
		setConvertClicked(!convertClicked);
		setInterpretClicked( false );
	};

	const updateInputText = (event) => {
		setInputText(event.target.value);
		setInputTextLen(inputText.length);
		setOutputText(convertText(event.target.value));
		setOutputTextLen(outputText.length);
	};

	const selectionClicked = (event) => {
		if( interpretClicked )
		{
			const newInterpret = event.target.getAttribute('value');
			setInterpret( newInterpret );
			setInterpretClicked( false );
		}
		else if( convertClicked )
		{
			const newConvert = event.target.getAttribute('value');
			setConvert( newConvert );
			setConvertClicked( false );
		}
	}

	return (
		<div className="App">
			<Header siteTitle="CryptGen" />
			<Description>
				This project is under active development and license under the{" "}
				<strong>MIT license</strong> where you can encode and decode
				between different format systems. This happens fully in your
				browser using <strong>JavaScript</strong>, no content will be
				sent to any kind of server. Please note that the encryption
				methods offered below are very basic and therefore{" "}
				<strong>not considered as secure.</strong>
			</Description>
			<SelectionArea
				leftmode={currentInterpret}
				rightmode={currentConvert}
				leftclick={showSelectOptionLeft}
				rightclick={showSelectOptionRight}
			/>
			<TextArea
				inputtext={inputText}
				inputtextlen={inputTextLen}
				outputtext={outputText}
				outputtextlen={outputTextLen}
				func={updateInputText}
				leftmode={interpretClicked}
				rightmode={convertClicked}
				list={selectionList}
				selectfunc={selectionClicked}
			/>
		</div>
	);
}

export default App;
