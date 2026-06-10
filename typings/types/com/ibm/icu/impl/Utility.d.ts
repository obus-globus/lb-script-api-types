import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { UnicodeMatcher } from '../../../../com/ibm/icu/text/UnicodeMatcher.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { Pattern } from '../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Utility extends Object {
    static LINE_SEPARATOR: string;
    static RLEStringToByteArray(paramarg0: string): number[];
    static RLEStringToCharArray(paramarg0: string): string[];
    static RLEStringToIntArray(paramarg0: string): number[];
    static RLEStringToShortArray(paramarg0: string): number[];
    static addExact(paramarg0: number, paramarg1: number): number;
    static appendNumber(paramarg0: Appendable | null, paramarg1: number, paramarg2: number, paramarg3: number): Appendable | null;
    static appendTo(paramarg0: CharSequence, paramarg1: Appendable | null): Appendable | null;
    static appendToRule(paramarg0: StringBuffer, paramarg1: UnicodeMatcher, paramarg2: boolean, paramarg3: StringBuffer): void;
    static appendToRule(paramarg0: StringBuffer, paramarg1: number, paramarg2: boolean, paramarg3: boolean, paramarg4: StringBuffer): void;
    static appendToRule(paramarg0: StringBuffer, paramarg1: string, paramarg2: boolean, paramarg3: boolean, paramarg4: StringBuffer): void;
    static arrayEquals(paramarg0: number[], paramarg1: Object): boolean;
    static arrayEquals(paramarg0: number[], paramarg1: Object): boolean;
    static arrayEquals(paramarg0: number[], paramarg1: Object): boolean;
    static arrayEquals(paramarg0: Object, paramarg1: Object): boolean;
    static arrayEquals(paramarg0: (Object | null)[], paramarg1: Object): boolean;
    static arrayRegionMatches(paramarg0: number[], paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): boolean;
    static arrayRegionMatches(paramarg0: string[], paramarg1: number, paramarg2: string[], paramarg3: number, paramarg4: number): boolean;
    static arrayRegionMatches(paramarg0: number[], paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): boolean;
    static arrayRegionMatches(paramarg0: number[], paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): boolean;
    static arrayRegionMatches(paramarg0: (Object | null)[], paramarg1: number, paramarg2: (Object | null)[], paramarg3: number, paramarg4: number): boolean;
    static arrayToRLEString(paramarg0: number[]): string;
    static arrayToRLEString(paramarg0: string[]): string;
    static arrayToRLEString(paramarg0: number[]): string;
    static arrayToRLEString(paramarg0: number[]): string;
    static charSequenceEquals(paramarg0: CharSequence, paramarg1: CharSequence): boolean;
    static charSequenceHashCode(paramarg0: CharSequence): number;
    static checkCompare(paramarg0: Object | null, paramarg1: Object | null): number;
    static checkHash(paramarg0: Object): number;
    static compareUnsigned(paramarg0: number, paramarg1: number): number;
    static cpFromCodePointAndLength(paramarg0: number): number;
    static escape(paramarg0: Appendable | null, paramarg1: number): Appendable | null;
    static escape(paramarg0: string): string;
    static escapeUnprintable(paramarg0: Appendable | null, paramarg1: number): boolean;
    static format1ForSource(paramarg0: string): string;
    static formatForSource(paramarg0: string): string;
    static fromHex(paramarg0: string, paramarg1: number, paramarg2: string): string;
    static fromHex(paramarg0: string, paramarg1: number, paramarg2: Pattern): string;
    static hex(paramarg0: CharSequence | null, paramarg1: number, paramarg2: CharSequence | null, paramarg3: boolean, paramarg4: Appendable | null): Appendable | null;
    static hex(paramarg0: CharSequence | null, paramarg1: number, paramarg2: CharSequence | null): string;
    static hex(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: string): string;
    static hex(paramarg0: CharSequence): string;
    static hex(paramarg0: number): string;
    static hex(paramarg0: number, paramarg1: number): string;
    static highBit(paramarg0: number): number;
    static isUnprintable(paramarg0: number): boolean;
    static joinStrings(paramarg0: CharSequence, paramarg1: CharSequence[]): string;
    static lengthFromCodePointAndLength(paramarg0: number): number;
    static lookup(paramarg0: string, paramarg1: (Object | null)[]): number;
    static parseChar(paramarg0: string, paramarg1: number[], paramarg2: string): boolean;
    static parseInteger(paramarg0: string, paramarg1: number[], paramarg2: number): number;
    static parseNumber(paramarg0: string, paramarg1: number[], paramarg2: number): number;
    static parsePattern(paramarg0: string, paramarg1: Replaceable, paramarg2: number, paramarg3: number): number;
    static parsePattern(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: string, paramarg4: number[]): number;
    static parseUnicodeIdentifier(paramarg0: string, paramarg1: number[]): string;
    static quotedIndexOf(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: string): number;
    static repeat(paramarg0: string, paramarg1: number): string;
    static sameObjects(paramarg0: Object, paramarg1: Object): boolean;
    static shouldAlwaysBeEscaped(paramarg0: number): boolean;
    static split(paramarg0: string, paramarg1: string): (Object | null)[];
    static split(paramarg0: string, paramarg1: string, paramarg2: (Object | null)[]): void;
    static splitString(paramarg0: string, paramarg1: string): (Object | null)[];
    static splitWhitespace(paramarg0: string): (Object | null)[];
    static unescape(paramarg0: CharSequence): string;
    static unescapeAndLengthAt(paramarg0: CharSequence, paramarg1: number): number;
    static unescapeLeniently(paramarg0: CharSequence): string;
    static valueOf(paramarg0: number[]): string;
    constructor()
}