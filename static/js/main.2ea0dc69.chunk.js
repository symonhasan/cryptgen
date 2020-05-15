(this["webpackJsonpcrypt-text-generator"]=this["webpackJsonpcrypt-text-generator"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(2),i=n.n(c),l=(n(12),n(3)),o=n(4),s=n(6),u=n(5),m=(n(13),n(14),function(e){return a.a.createElement("h1",null,e.siteTitle)}),p=function(e){return a.a.createElement("div",{className:"description"},a.a.createElement("p",null,e.children))},f=function(e){return a.a.createElement("div",{className:"top-header"},a.a.createElement(m,{siteTitle:e.siteTitle}),a.a.createElement("a",{href:"github.com"},"Github"))},h=(n(15),function(e){return a.a.createElement("div",{className:e.class,onClick:e.click},a.a.createElement("p",null,e.title),a.a.createElement("h2",null,e.mode))}),d=function(e){return a.a.createElement("div",{className:"selection-area"},a.a.createElement(h,{class:"selection-left",title:"Interpret As",mode:e.leftmode,click:e.leftclick}),a.a.createElement(h,{class:"selection-right",title:"Convert To",mode:e.rightmode,click:e.rightclick}))},v=(n(16),function(e){return a.a.createElement("div",{className:""},a.a.createElement("textarea",{rows:"12",onChange:e.func,value:e.value}),a.a.createElement("div",{className:"bar"},a.a.createElement("p",null,e.len)))}),x=function(e){return e.list.map((function(t,n){return a.a.createElement("div",{key:n,value:t.name,className:"selection",onClick:e.selectfunc},a.a.createElement("p",{className:"selection-name",value:t.name},t.name),a.a.createElement("p",{className:"selection-sample",value:t.name},t.sample))}))},T=function(e){return a.a.createElement("div",{className:"text-area"},function(e){return e.leftmode?a.a.createElement("div",{className:"selectlist-area"},a.a.createElement(x,{list:e.list,selectfunc:e.selectfunc})):a.a.createElement(v,{value:e.inputtext,len:e.inputtextlen,func:e.func})}(e),function(e){return e.rightmode?a.a.createElement("div",{className:"selectlist-area"},a.a.createElement(x,{list:e.list,selectfunc:e.selectfunc})):a.a.createElement(v,{value:e.outputtext,len:e.outputtextlen})}(e))},g=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).convertText=function(t,n){var r=function(e){for(var t="",n=e.length-1;n>=0;n--)t+=e[n];return t},a=function(e,t){for(var n="";0!==e;){var a=Math.floor(e%t);a>9&&(a=String.fromCharCode(a+55)),console.log(a),n+=a,e=Math.floor(e/t)}return n=r(n)};switch(n){case"Flipped":return r(t);case"Decimal":return function(){for(var e="",n=0;n<t.length;n++)e+=t.charCodeAt(n)+" ";return e}();case"Binary":return function(e){for(var t="",n=0;n<e.length;n++)t+=a(e.charCodeAt(n),2),t+=" ";return t}(t);case"Octal":return function(e){for(var t="",n=0;n<e.length;n++)t+=a(e.charCodeAt(n),8),t+=" ";return t}(t);case"Hexadecimal":return function(e){for(var t="",n=0;n<e.length;n++)t+=a(e.charCodeAt(n),16),t+=" ";return t}(t);default:return e.state.inputText}},e.state={currentInterpret:"Text",currentConvert:"Flipped",interpretClicked:!1,convertClicked:!1,inputText:"The quick brown fox jumps over 13 lazy dogs.",inputTextLen:0,outputTextLen:0},e.selectionList=[{name:"Text",sample:"The quick brown fox jumps over 13 lazy dogs."},{name:"Flipped",sample:".sgod yzal 31 revo spmuj xof nworb kciuq ehT"},{name:"Decimal",sample:"84 104 101 32 113 117 105 99 107 32 98 114 111 119 110 32 102 111 120 32 106 117 109 112 115 32 111 118 101 114 32 49 51 32 108 97 122 121 32 100 111 103 115 46"},{name:"Binary",sample:"01010100 01101000 01100101 00100000 01110001 01110101 01101001 01100011 01101011 00100000 01100010 01110010 01101111 01110111 01101110 00100000 01100110 01101111 01111000 00100000 01101010 01110101 01101101 01110000 01110011 00100000 01101111 01110110 01100101 01110010 00100000 00110001 00110011 00100000 01101100 01100001 01111010 01111001 00100000 01100100 01101111 01100111 01110011 00101110"},{name:"Octal",sample:"124 150 145 40 161 165 151 143 153 40 142 162 157 167 156 40 146 157 170 40 152 165 155 160 163 40 157 166 145 162 40 61 63 40 154 141 172 171 40 144 157 147 163 56"},{name:"Hexadecimal",sample:"54 68 65 20 71 75 69 63 6b 20 62 72 6f 77 6e 20 66 6f 78 20 6a 75 6d 70 73 20 6f 76 65 72 20 31 33 20 6c 61 7a 79 20 64 6f 67 73 2e"}],e.transformState=function(){e.setState({outputText:e.convertText(e.state.inputText,e.state.currentConvert)})},e.showSelectOptionLeft=function(t){e.setState({interpretClicked:!e.state.interpretClicked,convertClicked:!1})},e.showSelectOptionRight=function(t){e.setState({convertClicked:!e.state.convertClicked,interpretClicked:!1})},e.updateInputText=function(t){e.setState({inputText:t.target.value,inputTextLen:e.state.inputText.length,outputText:e.convertText(t.target.value,e.state.currentConvert),outputTextLen:e.state.outputText.length})},e.selectionClicked=function(t){if(e.state.interpretClicked){var n=t.target.getAttribute("value");e.setState({currentInterpret:n,interpretClicked:!1})}else if(e.state.convertClicked){var r=t.target.getAttribute("value");e.setState({currentConvert:r,convertClicked:!1,outputText:e.convertText(e.state.inputText,r)})}},e}return Object(o.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({outputText:this.convertText(this.state.inputText,this.state.currentConvert)})}},{key:"componentDidMount",value:function(){this.setState({inputTextLen:this.state.inputText.length,outputTextLen:this.state.outputText.length})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,{siteTitle:"CryptGen"}),a.a.createElement(p,null,"This project is license under the ",a.a.createElement("strong",null,"MIT")," and still under active development inspired from ",a.a.createElement("a",{href:"https://v2.cryptii.com"},"Cryptii"),". This site fully run into your browser therefore no contents won't sent to any kind of server. Here you can encode and decode your text between different format systems. Please note that the encryption methods offered here are very basic and therefore ",a.a.createElement("strong",null,"not considered as secure.")),a.a.createElement(d,{leftmode:this.state.currentInterpret,rightmode:this.state.currentConvert,leftclick:this.showSelectOptionLeft,rightclick:this.showSelectOptionRight}),a.a.createElement(T,{inputtext:this.state.inputText,inputtextlen:this.state.inputTextLen,outputtext:this.state.outputText,outputtextlen:this.state.outputTextLen,func:this.updateInputText,leftmode:this.state.interpretClicked,rightmode:this.state.convertClicked,list:this.selectionList,selectfunc:this.selectionClicked}))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.2ea0dc69.chunk.js.map