const toFlippedStr = (str) => {
    let outputStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        outputStr += str[i];
    }
    return outputStr;
};

exports.setOriginalText = ( str , mode ) => {

    switch( mode ){
        case 'Flipped':
            return toFlippedStr( str );
        default:
            return str;
    }
}