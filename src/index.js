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

    const letter = (e) => {
        let res = ''
        e.split('00').forEach(el => {
            res += el!=='' ? el : '';
        })
        const morse_letter = res.replace(/10/gi,'.').replace(/11/gi,'-');
        const ret = morse_letter !== '**********' ? MORSE_TABLE[morse_letter] : ' ' ;
        return ret
    }

    let stack = '';
    let str = ''
    let count = 0

    expr.split('').forEach(v => {
    stack += v;
    count += 1;
    if (count%10 === 0) {
        count = 0
        str += letter(stack);
        stack = ''
    }
})
    return str
}

module.exports = {
    decode
}