import type { Object } from '../../../java/lang/Object.d.ts'
import type { ComparableWord } from '../../../org/graalvm/word/ComparableWord.d.ts'
import type { UnsignedWord } from '../../../org/graalvm/word/UnsignedWord.d.ts'
export interface SignedWord extends Object, ComparableWord{
    add(val: number): SignedWord;
    add(val: SignedWord): SignedWord;
    and(val: number): SignedWord;
    and(val: SignedWord): SignedWord;
    equal(val: number): boolean;
    equal(val: SignedWord): boolean;
    greaterOrEqual(val: number): boolean;
    greaterOrEqual(val: SignedWord): boolean;
    greaterThan(val: number): boolean;
    greaterThan(val: SignedWord): boolean;
    lessOrEqual(val: number): boolean;
    lessOrEqual(val: SignedWord): boolean;
    lessThan(val: number): boolean;
    lessThan(val: SignedWord): boolean;
    multiply(val: number): SignedWord;
    multiply(val: SignedWord): SignedWord;
    not(): SignedWord;
    notEqual(val: number): boolean;
    notEqual(val: SignedWord): boolean;
    or(val: number): SignedWord;
    or(val: SignedWord): SignedWord;
    rawValue(): number;
    shiftLeft(n: number): SignedWord;
    shiftLeft(n: UnsignedWord): SignedWord;
    signedDivide(val: number): SignedWord;
    signedDivide(val: SignedWord): SignedWord;
    signedRemainder(val: number): SignedWord;
    signedRemainder(val: SignedWord): SignedWord;
    signedShiftRight(n: number): SignedWord;
    signedShiftRight(n: UnsignedWord): SignedWord;
    subtract(val: number): SignedWord;
    subtract(val: SignedWord): SignedWord;
    xor(val: number): SignedWord;
    xor(val: SignedWord): SignedWord;
}