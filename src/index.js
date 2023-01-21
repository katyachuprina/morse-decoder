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
  let str = ''; 
  let i = 0;
  while (i < expr.length) {
      if (expr[i] === '*') {
          str += ' ';
          i += 10;
      } else {
          let letterCode = '';
          for (let j = 0; j < 5; j++) {
              switch (expr.slice(i, i + 2)) {  
                  case '11': 
                      letterCode += '-';
                      break;
                  case '10': 
                      letterCode += '.';
                      break;
              }
              i += 2;
          }
          str += MORSE_TABLE[letterCode];
      }
  }
  return str;
} 

module.exports = {
    decode
}
