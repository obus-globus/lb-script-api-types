import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { Pattern } from '../../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
import type { UnicodeMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeMatcher.d.ts'
export class Utility extends Object {
    static LINE_SEPARATOR: string;
    static RLEStringToByteArray(params: string): number[];
    static RLEStringToCharArray(params: string): string[];
    static RLEStringToIntArray(params: string): number[];
    static RLEStringToShortArray(params: string): number[];
    static addExact(paramx: number, paramy: number): number;
    static appendNumber(paramresult: Object | null, paramn: number, paramradix: number, paramminDigits: number): Object | null;
    static appendTo(paramstring: CharSequence, paramappendable: Object | null): Object | null;
    static appendToRule(paramrule: StringBuffer, paramc: number, paramisLiteral: boolean, paramescapeUnprintable: boolean, paramquoteBuf: StringBuffer): void;
    static appendToRule(paramrule: StringBuffer, paramtext: string, paramisLiteral: boolean, paramescapeUnprintable: boolean, paramquoteBuf: StringBuffer): void;
    static appendToRule(paramrule: StringBuffer, parammatcher: UnicodeMatcher, paramescapeUnprintable: boolean, paramquoteBuf: StringBuffer): void;
    static arrayEquals(paramsource: number[], paramtarget: Object): boolean;
    static arrayEquals(paramsource: number[], paramtarget: Object): boolean;
    static arrayEquals(paramsource: number[], paramtarget: Object): boolean;
    static arrayEquals(paramsource: Object, paramtarget: Object): boolean;
    static arrayEquals(paramsource: (Object | null)[], paramtarget: Object): boolean;
    static arrayRegionMatches(paramsource: number[], paramsourceStart: number, paramtarget: number[], paramtargetStart: number, paramlen: number): boolean;
    static arrayRegionMatches(paramsource: string[], paramsourceStart: number, paramtarget: string[], paramtargetStart: number, paramlen: number): boolean;
    static arrayRegionMatches(paramsource: number[], paramsourceStart: number, paramtarget: number[], paramtargetStart: number, paramlen: number): boolean;
    static arrayRegionMatches(paramsource: number[], paramsourceStart: number, paramtarget: number[], paramtargetStart: number, paramlen: number): boolean;
    static arrayRegionMatches(paramsource: (Object | null)[], paramsourceStart: number, paramtarget: (Object | null)[], paramtargetStart: number, paramlen: number): boolean;
    static arrayToRLEString(parama: number[]): string;
    static arrayToRLEString(parama: string[]): string;
    static arrayToRLEString(parama: number[]): string;
    static arrayToRLEString(parama: number[]): string;
    static charSequenceEquals(parama: CharSequence, paramb: CharSequence): boolean;
    static charSequenceHashCode(paramvalue: CharSequence): number;
    static checkCompare(parama: Object | null, paramb: Object | null): number;
    static checkHash(parama: Object): number;
    static compareUnsigned(paramsource: number, paramtarget: number): number;
    static cpFromCodePointAndLength(paramcpAndLength: number): number;
    static escape(paramresult: Object | null, paramc: number): Object | null;
    static escape(params: string): string;
    static escapeUnprintable(paramresult: Object | null, paramc: number): boolean;
    static format1ForSource(params: string): string;
    static formatForSource(params: string): string;
    static fromHex(paramstring: string, paramminLength: number, paramseparator: string): string;
    static fromHex(paramstring: string, paramminLength: number, paramseparator: Pattern): string;
    static hex(params: Object | null, paramwidth: number, paramseparator: Object | null, paramuseCodePoints: boolean, paramresult: Object | null): Object | null;
    static hex(params: Object | null, paramwidth: number, paramseparator: Object | null): string;
    static hex(paramo: number[], paramstart: number, paramend: number, paramseparator: string): string;
    static hex(params: CharSequence): string;
    static hex(paramch: number): string;
    static hex(parami: number, paramplaces: number): string;
    static highBit(paramn: number): number;
    static isUnprintable(paramc: number): boolean;
    static joinStrings(paramdelimiter: CharSequence, paramelements: (Object | null)[]): string;
    static lengthFromCodePointAndLength(paramcpAndLength: number): number;
    static lookup(paramsource: string, paramtarget: (Object | null)[]): number;
    static parseChar(paramid: string, parampos: number[], paramch: string): boolean;
    static parseInteger(paramrule: string, parampos: number[], paramlimit: number): number;
    static parseNumber(paramtext: string, parampos: number[], paramradix: number): number;
    static parsePattern(paramrule: string, parampos: number, paramlimit: number, parampattern: string, paramparsedInts: number[]): number;
    static parsePattern(parampat: string, paramtext: Replaceable, paramindex: number, paramlimit: number): number;
    static parseUnicodeIdentifier(paramstr: string, parampos: number[]): string;
    static quotedIndexOf(paramtext: string, paramstart: number, paramlimit: number, paramsetOfChars: string): number;
    static repeat(params: string, paramcount: number): string;
    static sameObjects(parama: Object, paramb: Object): boolean;
    static shouldAlwaysBeEscaped(paramc: number): boolean;
    static split(params: string, paramdivider: string): (Object | null)[];
    static split(params: string, paramdivider: string, paramoutput: (Object | null)[]): void;
    static splitString(paramsrc: string, paramtarget: string): (Object | null)[];
    static splitWhitespace(paramsrc: string): (Object | null)[];
    static unescape(params: CharSequence): string;
    static unescapeAndLengthAt(params: CharSequence, paramoffset: number): number;
    static unescapeLeniently(params: CharSequence): string;
    static valueOf(paramsource: number[]): string;
    constructor()
}