import type { Object } from '../../../java/lang/Object.d.ts'
import type { ComparableWord } from '../../../org/graalvm/word/ComparableWord.d.ts'
export interface UnsignedWord extends Object, ComparableWord{
    aboveOrEqual(val: number): boolean;
    aboveOrEqual(val: UnsignedWord): boolean;
    aboveThan(val: number): boolean;
    aboveThan(val: UnsignedWord): boolean;
    add(val: number): UnsignedWord;
    add(val: UnsignedWord): UnsignedWord;
    and(val: number): UnsignedWord;
    and(val: UnsignedWord): UnsignedWord;
    belowOrEqual(val: number): boolean;
    belowOrEqual(val: UnsignedWord): boolean;
    belowThan(val: number): boolean;
    belowThan(val: UnsignedWord): boolean;
    equal(val: number): boolean;
    equal(val: UnsignedWord): boolean;
    multiply(val: number): UnsignedWord;
    multiply(val: UnsignedWord): UnsignedWord;
    not(): UnsignedWord;
    notEqual(val: number): boolean;
    notEqual(val: UnsignedWord): boolean;
    or(val: number): UnsignedWord;
    or(val: UnsignedWord): UnsignedWord;
    shiftLeft(n: number): UnsignedWord;
    shiftLeft(n: UnsignedWord): UnsignedWord;
    subtract(val: number): UnsignedWord;
    subtract(val: UnsignedWord): UnsignedWord;
    unsignedDivide(val: number): UnsignedWord;
    unsignedDivide(val: UnsignedWord): UnsignedWord;
    unsignedRemainder(val: number): UnsignedWord;
    unsignedRemainder(val: UnsignedWord): UnsignedWord;
    unsignedShiftRight(n: number): UnsignedWord;
    unsignedShiftRight(n: UnsignedWord): UnsignedWord;
    xor(val: number): UnsignedWord;
    xor(val: UnsignedWord): UnsignedWord;
}