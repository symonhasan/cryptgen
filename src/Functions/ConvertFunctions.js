const toFlippedStr = (str) => {
    let outputStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        outputStr += str[i];
    }
    return outputStr;
};

const toDecimal = (str) => {
    let outputStr = "";
    for (let i = 0; i < str.length; i++) {
        outputStr += str.charCodeAt(i) + " ";
    }
    return outputStr;
};

const convertBaseTo = (number, base) => {
    let res = "";
    while (number !== 0) {
        let ld = Math.floor(number % base);
        if( ld > 9 ){
            ld = String.fromCharCode( ld + 55 );
        }
        res += ld;
        number = Math.floor(number / base);
    }
    res = toFlippedStr(res);
    return res;
};

const toBinary = (str) => {
    let outputStr = "";
    for (let i = 0; i < str.length; i++) {
        outputStr += convertBaseTo(str.charCodeAt(i), 2);
        outputStr += " ";
    }
    return outputStr;
};

const toOctal = (str) => {
    let outputStr = "";
    for (let i = 0; i < str.length; i++) {
        outputStr += convertBaseTo(str.charCodeAt(i), 8);
        outputStr += " ";
    }
    return outputStr;
};

const toHexa = (str) => {
    let outputStr = "";
    for (let i = 0; i < str.length; i++) {
        outputStr += convertBaseTo(str.charCodeAt(i), 16);
        outputStr += " ";
    }
    return outputStr;
};

exports.setConvertText = (str, mode) => {
    switch (mode) {
        case "Flipped":
            return toFlippedStr(str);
        case "Decimal":
            return toDecimal(str);
        case "Binary":
            return toBinary(str);
        case "Octal":
            return toOctal(str);
        case "Hexadecimal":
            return toHexa(str);
        default:
            return str;
    }
};
