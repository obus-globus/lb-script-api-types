import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Utf8 extends Object {
    static encodedLength(paramsequence: CharSequence): number;
    static isWellFormed(parambytes: number[]): boolean;
    static isWellFormed(parambytes: number[], paramoff: number, paramlen: number): boolean;
    private constructor()
}