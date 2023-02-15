const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrNumbers = [];
    for (let i = 0; i < expr.length; i += 10) {
        arrNumbers.push(expr.slice(i, i + 10));
    }
    let arrDotsAndDashs = [];
    for (let j = 0; j < arrNumbers.length; j++) {
        if (arrNumbers[j] === '**********') {
            arrDotsAndDashs.push(' ');
        }
        let arrTwoDig = [];
        for (let k = 0; k < 10; k += 2) {
            if (`${arrNumbers[j][k]}${arrNumbers[j][k + 1]}` === '11') {
                arrTwoDig.push('-');
            }
            if (`${arrNumbers[j][k]}${arrNumbers[j][k + 1]}` === '10') {
                arrTwoDig.push('.');
            }
            if (`${arrNumbers[j][k]}${arrNumbers[j][k + 1]}` === '00') {
                arrTwoDig.push('');
            }
        }
        arrDotsAndDashs.push(arrTwoDig.join(''));
    }
    let string = [];
    arrDotsAndDashs.forEach((symb) => {
        if (symb === ' ' || symb === '') {
            string.push(symb);
        } else {
            string.push(MORSE_TABLE[symb]);
        }
    })
    return string.join('');
}

module.exports = {
    decode
}