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
    let end = "";
    const length = 10; 
    const pattern = new RegExp(".{1," + length + "}", "ig");
    let res = expr.match(pattern).map(item => item.padEnd(length, "."));
    for (let p = 0; p<res.length; p++){
        let icon = ""
        let f = res[p]
        if (f == "**********") {
            end += " " 
            continue
        }
        for (let r = 0; r<res[p].length; r += 2){
            if (f[r]+f[r+1] == "10") {
                icon += '.'
            }
            if (f[r]+f[r+1] == "11") {
                icon += '-'
            }
        }
        end += MORSE_TABLE[icon]
    }
    return end
}

module.exports = {
    decode
}
