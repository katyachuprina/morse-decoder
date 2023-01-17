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
    let newArray = [];
    let codeArray = [];
    let codePhrase = '';

    for (let i = 0; i < expr.length; i = i + 10) {
      newArray.push(expr.slice(i, i + 10));
    }

    for (let i = 0; i < newArray.length; i++) {
      let symbol = +(newArray[i]); //10101010
      symbol = symbol + '';
      let code = '';

      for (let i = 0; i < symbol.length; i = i + 2) {
        if ((symbol[i] + symbol[i + 1]) == 10) {
          code += '.';
        } else if ((symbol[i] + symbol[i + 1]) == 11) {
          code += '-';
        } else if ((symbol[i] + symbol[i + 1]) == '**') {
          code = ' ';
        }
      }
      codeArray.push(code);
    }
    
    for (let i = 0; i < codeArray.length; i++) {
      if (MORSE_TABLE[codeArray[i]] !== undefined) {
        codePhrase += MORSE_TABLE[codeArray[i]];
      } else {
        codePhrase += ' ';
      }
    }

    return codePhrase;
} 

module.exports = {
    decode
}
