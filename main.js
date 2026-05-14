function sum(a, b) {
    return a + b;
}

function capitalize(string) {
    let strLength = string.length;
    let firstLetter = string.slice(0, 1);
    let otherLetters = string.slice(1, strLength);
    let newString = firstLetter.toUpperCase() + otherLetters
    return newString;
}

function reverseString(string) {
    let array = string.split('');
    let reversedArr = array.reverse();
    let reversedStr = reversedArr.join('');
    return reversedStr
}

let calculator = {
    saveA(a) {
        this.A = a;
    },
    saveB(b) {
        this.B = b
    },

    add(x, y) {
        this.saveA(x);
        this.saveB(y);
        return this.A + this.B
    },

    multiply(x, y) {
        this.saveA(x);
        this.saveB(y);
        return this.A * this.B

    },

    subtract(x, y) {
        this.saveA(x);
        this.saveB(y);
        return this.A - this.B

    },

    divide(x, y) {
        this.saveA(x);
        this.saveB(y);
        return this.A / this.B

    }
};

function ceasarCipher(string, key) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    function makeCipheredArray() {
        let removedElements = alphabet.slice(0, key);
        let newArr = alphabet.slice(key, alphabet.length);
        newArr.push(...removedElements);
        return newArr
    }

    let cipheredArray = makeCipheredArray();

    let stringArray = string.split('');

    let cipheredStringArr = [];

    for(const letter of stringArray){
        
        let isUpperCase = /[A-Z]/.test(letter);
        let isNotAletter = !/[a-zA-Z]/.test(letter);
        let isUndefined = letter === undefined;
    
        if (isNotAletter || isUndefined) {
            cipheredStringArr.push(letter);
        } else if (isUpperCase) {
            let lowerCaseLetter = letter.toLowerCase();
            let letterIndex = alphabet.indexOf(lowerCaseLetter);
            let cipheredLetter = cipheredArray[letterIndex];
            cipheredStringArr.push(cipheredLetter.toUpperCase())   
        } else {
            let letterIndex = alphabet.indexOf(letter);
            let cipheredLetter = cipheredArray[letterIndex];
            cipheredStringArr.push(cipheredLetter)
        }
    }

    return cipheredStringArr.join("");
}

export { sum, capitalize, reverseString, calculator, ceasarCipher };