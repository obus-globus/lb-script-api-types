import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class UTF16 extends Object {
    static CODEPOINT_MAX_VALUE: number;
    static CODEPOINT_MIN_VALUE: number;
    static LEAD_SURROGATE_BOUNDARY: number;
    static LEAD_SURROGATE_MAX_VALUE: number;
    static LEAD_SURROGATE_MIN_VALUE: number;
    static SINGLE_CHAR_BOUNDARY: number;
    static SUPPLEMENTARY_MIN_VALUE: number;
    static SURROGATE_MAX_VALUE: number;
    static SURROGATE_MIN_VALUE: number;
    static TRAIL_SURROGATE_BOUNDARY: number;
    static TRAIL_SURROGATE_MAX_VALUE: number;
    static TRAIL_SURROGATE_MIN_VALUE: number;
    static append(paramarg0: string[], paramarg1: number, paramarg2: number): number;
    static append(paramarg0: StringBuffer, paramarg1: number): StringBuffer;
    static appendCodePoint(paramarg0: StringBuffer, paramarg1: number): StringBuffer;
    static bounds(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: number): number;
    static bounds(paramarg0: string, paramarg1: number): number;
    static bounds(paramarg0: StringBuffer, paramarg1: number): number;
    static charAt(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: number): number;
    static charAt(paramarg0: Replaceable, paramarg1: number): number;
    static charAt(paramarg0: CharSequence, paramarg1: number): number;
    static charAt(paramarg0: string, paramarg1: number): number;
    static charAt(paramarg0: StringBuffer, paramarg1: number): number;
    static compareCodePoint(paramarg0: number, paramarg1: CharSequence): number;
    static countCodePoint(paramarg0: string[], paramarg1: number, paramarg2: number): number;
    static countCodePoint(paramarg0: string): number;
    static countCodePoint(paramarg0: StringBuffer): number;
    static delete(paramarg0: string[], paramarg1: number, paramarg2: number): number;
    static delete(paramarg0: StringBuffer, paramarg1: number): StringBuffer;
    static findCodePointOffset(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: number): number;
    static findCodePointOffset(paramarg0: string, paramarg1: number): number;
    static findCodePointOffset(paramarg0: StringBuffer, paramarg1: number): number;
    static findOffsetFromCodePoint(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: number): number;
    static findOffsetFromCodePoint(paramarg0: string, paramarg1: number): number;
    static findOffsetFromCodePoint(paramarg0: StringBuffer, paramarg1: number): number;
    static getCharCount(paramarg0: number): number;
    static getLeadSurrogate(paramarg0: number): string;
    static getSingleCodePoint(paramarg0: CharSequence): number;
    static getTrailSurrogate(paramarg0: number): string;
    static hasMoreCodePointsThan(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: number): boolean;
    static hasMoreCodePointsThan(paramarg0: string, paramarg1: number): boolean;
    static hasMoreCodePointsThan(paramarg0: StringBuffer, paramarg1: number): boolean;
    static indexOf(paramarg0: string, paramarg1: number): number;
    static indexOf(paramarg0: string, paramarg1: number, paramarg2: number): number;
    static indexOf(paramarg0: string, paramarg1: string): number;
    static indexOf(paramarg0: string, paramarg1: string, paramarg2: number): number;
    static insert(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: number): number;
    static insert(paramarg0: StringBuffer, paramarg1: number, paramarg2: number): StringBuffer;
    static isLeadSurrogate(paramarg0: number): boolean;
    static isSurrogate(paramarg0: number): boolean;
    static isTrailSurrogate(paramarg0: number): boolean;
    static lastIndexOf(paramarg0: string, paramarg1: number): number;
    static lastIndexOf(paramarg0: string, paramarg1: number, paramarg2: number): number;
    static lastIndexOf(paramarg0: string, paramarg1: string): number;
    static lastIndexOf(paramarg0: string, paramarg1: string, paramarg2: number): number;
    static moveCodePointOffset(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static moveCodePointOffset(paramarg0: string, paramarg1: number, paramarg2: number): number;
    static moveCodePointOffset(paramarg0: StringBuffer, paramarg1: number, paramarg2: number): number;
    static newString(paramarg0: number[], paramarg1: number, paramarg2: number): string;
    static replace(paramarg0: string, paramarg1: number, paramarg2: number): string;
    static replace(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static reverse(paramarg0: StringBuffer): StringBuffer;
    static setCharAt(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: number): number;
    static setCharAt(paramarg0: StringBuffer, paramarg1: number, paramarg2: number): void;
    static valueOf(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: number): string;
    static valueOf(paramarg0: number): string;
    static valueOf(paramarg0: string, paramarg1: number): string;
    static valueOf(paramarg0: StringBuffer, paramarg1: number): string;
    private constructor()
}