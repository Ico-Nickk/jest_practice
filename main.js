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

    stringArray.forEach(element => {
        const isLetter = /[a-zA-Z]/.test(element);
        const isUpperCase = /[A-Z]/.test(element);
        let capitalLetter =

            function getCipheredLetter() {
                let elementIndex = alphabet.indexOf(element);
                let cipheredLetter = cipheredArray[elementIndex];
                if (isUpperCase) {
                    return capitalize(cipheredLetter)
                } else {
                    return cipheredLetter

                }
            }

        function capitalize(letter) {
            return letter.toUpperCase();
        }

        if (isLetter) {
            if (isUpperCase) {
                let Letter = capitalize(getCipheredLetter());
                cipheredStringArr.push(Letter);
            } else {
                cipheredStringArr.push(getCipheredLetter());
            }
        } else {
            cipheredStringArr.push(element);
        }
    });

    return "A";
}

export { sum, capitalize, reverseString, calculator, ceasarCipher };