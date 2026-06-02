import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
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
    static append(paramtarget: string[], paramlimit: number, paramchar32: number): number;
    static append(paramtarget: StringBuffer, paramchar32: number): StringBuffer;
    static appendCodePoint(paramtarget: StringBuffer, paramcp: number): StringBuffer;
    static bounds(paramsource: string[], paramstart: number, paramlimit: number, paramoffset16: number): number;
    static bounds(paramsource: string, paramoffset16: number): number;
    static bounds(paramsource: StringBuffer, paramoffset16: number): number;
    static charAt(paramsource: string[], paramstart: number, paramlimit: number, paramoffset16: number): number;
    static charAt(paramsource: CharSequence, paramoffset16: number): number;
    static charAt(paramsource: string, paramoffset16: number): number;
    static charAt(paramsource: StringBuffer, paramoffset16: number): number;
    static charAt(paramsource: Replaceable, paramoffset16: number): number;
    static compareCodePoint(paramcodePoint: number, params: CharSequence): number;
    static countCodePoint(paramsource: string[], paramstart: number, paramlimit: number): number;
    static countCodePoint(paramsource: string): number;
    static countCodePoint(paramsource: StringBuffer): number;
    static delete(paramtarget: string[], paramlimit: number, paramoffset16: number): number;
    static delete(paramtarget: StringBuffer, paramoffset16: number): StringBuffer;
    static findCodePointOffset(paramsource: string[], paramstart: number, paramlimit: number, paramoffset16: number): number;
    static findCodePointOffset(paramsource: string, paramoffset16: number): number;
    static findCodePointOffset(paramsource: StringBuffer, paramoffset16: number): number;
    static findOffsetFromCodePoint(paramsource: string[], paramstart: number, paramlimit: number, paramoffset32: number): number;
    static findOffsetFromCodePoint(paramsource: string, paramoffset32: number): number;
    static findOffsetFromCodePoint(paramsource: StringBuffer, paramoffset32: number): number;
    static getCharCount(paramchar32: number): number;
    static getLeadSurrogate(paramchar32: number): string;
    static getSingleCodePoint(params: CharSequence): number;
    static getTrailSurrogate(paramchar32: number): string;
    static hasMoreCodePointsThan(paramsource: string[], paramstart: number, paramlimit: number, paramnumber: number): boolean;
    static hasMoreCodePointsThan(paramsource: string, paramnumber: number): boolean;
    static hasMoreCodePointsThan(paramsource: StringBuffer, paramnumber: number): boolean;
    static indexOf(paramsource: string, paramchar32: number): number;
    static indexOf(paramsource: string, paramchar32: number, paramfromIndex: number): number;
    static indexOf(paramsource: string, paramstr: string): number;
    static indexOf(paramsource: string, paramstr: string, paramfromIndex: number): number;
    static insert(paramtarget: string[], paramlimit: number, paramoffset16: number, paramchar32: number): number;
    static insert(paramtarget: StringBuffer, paramoffset16: number, paramchar32: number): StringBuffer;
    static isLeadSurrogate(paramcodePoint: number): boolean;
    static isSurrogate(paramcodePoint: number): boolean;
    static isTrailSurrogate(paramcodePoint: number): boolean;
    static lastIndexOf(paramsource: string, paramchar32: number): number;
    static lastIndexOf(paramsource: string, paramchar32: number, paramfromIndex: number): number;
    static lastIndexOf(paramsource: string, paramstr: string): number;
    static lastIndexOf(paramsource: string, paramstr: string, paramfromIndex: number): number;
    static moveCodePointOffset(paramsource: string[], paramstart: number, paramlimit: number, paramoffset16: number, paramshift32: number): number;
    static moveCodePointOffset(paramsource: string, paramoffset16: number, paramshift32: number): number;
    static moveCodePointOffset(paramsource: StringBuffer, paramoffset16: number, paramshift32: number): number;
    static newString(paramcodePoints: number[], paramoffset: number, paramcount: number): string;
    static replace(paramsource: string, paramoldChar32: number, paramnewChar32: number): string;
    static replace(paramsource: string, paramoldStr: string, paramnewStr: string): string;
    static reverse(paramsource: StringBuffer): StringBuffer;
    static setCharAt(paramtarget: string[], paramlimit: number, paramoffset16: number, paramchar32: number): number;
    static setCharAt(paramtarget: StringBuffer, paramoffset16: number, paramchar32: number): void;
    static valueOf(paramsource: string[], paramstart: number, paramlimit: number, paramoffset16: number): string;
    static valueOf(paramchar32: number): string;
    static valueOf(paramsource: string, paramoffset16: number): string;
    static valueOf(paramsource: StringBuffer, paramoffset16: number): string;
    private constructor()
}