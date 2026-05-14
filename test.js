import { sum, capitalize, reverseString, calculator, ceasarCipher } from './main.js'

test("ceasarCipher", () => {
    expect(ceasarCipher("ab", 1)).toBe("bc");
})

test("ceasarCipher returns ciphered array", () => {
    expect(ceasarCipher("a", 3)).toEqual(['d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c']);
})

test("ceasarCipher returns ciphered letters", () => {
    expect(ceasarCipher("ca b", 3)).toEqual(['f', 'd', ' ', 'e']);
})

test("ceasarCipher returns ciphered array with capital letters", () => {
    expect(ceasarCipher("A b", 3)).toEqual(['D', ' ', 'e']);
})
test("ceasarCipher returns capitalized letters", () => {
    expect(ceasarCipher("a", 3)).toBe('A');
})