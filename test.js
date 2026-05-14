import { sum, capitalize, reverseString, calculator, ceasarCipher } from './main.js'

test("ceasarCipher(12 bee?, 3) return '12 ehh?'", ()=>{
    expect(ceasarCipher("12 bee?", 3)).toBe("12 ehh?");
})

test("ceasarCipher() return Khoor, Zruog!", ()=>{
    expect(ceasarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})


