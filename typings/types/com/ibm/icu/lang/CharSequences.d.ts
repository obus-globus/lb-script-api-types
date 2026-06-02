import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CharSequences extends Object {
    static codePoints(paramarg0: CharSequence): number[];
    static compare(paramarg0: number, paramarg1: CharSequence): number;
    static compare(paramarg0: CharSequence, paramarg1: number): number;
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    static equals(paramarg0: Object | null, paramarg1: Object | null): boolean;
    static equals(paramarg0: number, paramarg1: CharSequence): boolean;
    static equals(paramarg0: CharSequence, paramarg1: number): boolean;
    static equalsChars(paramarg0: CharSequence, paramarg1: CharSequence): boolean;
    static getSingleCodePoint(paramarg0: CharSequence): number;
    static indexOf(paramarg0: CharSequence, paramarg1: number): number;
    static matchAfter(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: number, paramarg3: number): number;
    static onCharacterBoundary(paramarg0: CharSequence, paramarg1: number): boolean;
    private constructor()
    codePointLength(arg0: CharSequence): number;
}