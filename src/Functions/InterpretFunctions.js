const flippedStrToText = (str) => {
    let outputStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        outputStr += str[i];
    }
    return outputStr;
};

const decimalToText = ( str ) => {
    let outputStr = "";
    let temp = "";
    for(let i = 0; i < str.length; i++ ){
        if( str[ i ] === ' ' ){
            outputStr += String.fromCharCode( temp );
            temp = "";
        } else{
            temp += str[ i ];
        }
    }
    if( temp !== "" )
        outputStr += String.fromCharCode( temp );
    return outputStr;
}

const binaryToText = ( str ) => {

    let outputStr = "";
    let temp = "";
    for( let i = 0 ; i < str.length; i++ ){
        if( str[ i ] === ' ' )
        {
            const ch = parseInt( temp , 2 );
            temp = "";
            outputStr += String.fromCharCode( ch );
        } else {
            temp += str[ i ];
        }
    }
    if( temp !== "" )
        outputStr += String.fromCharCode( temp );
    return outputStr;
}

const octalToText = ( str ) => {

    let outputStr = "";
    let temp = "";
    for( let i = 0 ; i < str.length; i++ ){
        if( str[ i ] === ' ' )
        {
            const ch = parseInt( temp , 8);
            temp = "";
            outputStr += String.fromCharCode( ch );
        } else {
            temp += str[ i ];
        }
    }
    if( temp !== "" )
        outputStr += String.fromCharCode( temp );
    return outputStr;
}

const hexaDecimalToText = ( str ) => {

    let outputStr = "";
    let temp = "";
    for( let i = 0 ; i < str.length; i++ ){
        if( str[ i ] === ' ' )
        {
            const ch = parseInt( temp , 16 );
            temp = "";
            outputStr += String.fromCharCode( ch );
        } else {
            temp += str[ i ];
        }
    }
    if( temp !== "" )
        outputStr += String.fromCharCode( temp );
    return outputStr;
}

exports.setOriginalText = ( str , mode ) => {

    switch( mode ){
        case 'Flipped':
            return flippedStrToText( str );
        case 'Decimal':
            return decimalToText( str );
        case 'Binary':
            return binaryToText( str );
        case 'Octal':
            return octalToText( str );
        case 'Hexadecimal':
            return hexaDecimalToText( str );
        default:
            return str;
    }
}