import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Utf8 extends Object {
    static isValidUtf8(paramarg0: number[]): boolean;
    static isValidUtf8(paramarg0: number[], paramarg1: number, paramarg2: number): boolean;
    static partialIsValidUtf8(paramarg0: number[], paramarg1: number, paramarg2: number): number;
    static partialIsValidUtf8(paramarg0: number, paramarg1: number[], paramarg2: number, paramarg3: number): number;
}