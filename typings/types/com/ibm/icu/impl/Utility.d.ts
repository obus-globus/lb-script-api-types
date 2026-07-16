import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { UnicodeMatcher } from '../../../../com/ibm/icu/text/UnicodeMatcher.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Pattern } from '../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Utility extends Object {
    static LINE_SEPARATOR: string;
    static RLEStringToByteArray(paramarg0: string): number[];
    static RLEStringToCharArray(paramarg0: string): string[];
    static RLEStringToIntArray(paramarg0: string): number[];
    static RLEStringToShortArray(paramarg0: string): number[];
    static addExact(paramarg0: number, paramarg1: number): number;
    static appendNumber<T extends Appendable>(paramarg0: T, paramarg1: number, paramarg2: number, paramarg3: number): T;
    static appendTo<A extends Appendable>(paramarg0: CharSequence, paramarg1: A): A;
    static appendToRule(paramarg0: StringBuilder, paramarg1: UnicodeMatcher, paramarg2: boolean, paramarg3: StringBuilder): void;
    static appendToRule(paramarg0: StringBuilder, paramarg1: number, paramarg2: boolean, paramarg3: boolean, paramarg4: StringBuilder): void;
    static appendToRule(paramarg0: StringBuilder, paramarg1: string, paramarg2: boolean, paramarg3: boolean, paramarg4: StringBuilder): void;
    static arrayEquals(paramarg0: number[], paramarg1: Object): boolean;
    static arrayEquals(paramarg0: Object, paramarg1: Object): boolean;
    static arrayEquals(paramarg0: Object[], paramarg1: Object): boolean;
    static arrayRegionMatches(paramarg0: number[], paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): boolean;
    static arrayRegionMatches(paramarg0: string[], paramarg1: number, paramarg2: string[], paramarg3: number, paramarg4: number): boolean;
    static arrayRegionMatches(paramarg0: Object[], paramarg1: number, paramarg2: Object[], paramarg3: number, paramarg4: number): boolean;
    static arrayToRLEString(paramarg0: number[]): string;
    static arrayToRLEString(paramarg0: string[]): string;
    static charSequenceEquals(paramarg0: CharSequence, paramarg1: CharSequence): boolean;
    static charSequenceHashCode(paramarg0: CharSequence): number;
    static checkCompare<T extends Comparable<T>>(paramarg0: T, paramarg1: T): number;
    static checkHash(paramarg0: Object): number;
    static compareUnsigned(paramarg0: number, paramarg1: number): number;
    static cpFromCodePointAndLength(paramarg0: number): number;
    static escape<T extends Appendable>(paramarg0: T, paramarg1: number): T;
    static escape(paramarg0: string): string;
    static escapeUnprintable<T extends Appendable>(paramarg0: T, paramarg1: number): boolean;
    static format1ForSource(paramarg0: string): string;
    static formatForSource(paramarg0: string): string;
    static fromHex(paramarg0: string, paramarg1: number, paramarg2: string): string;
    static fromHex(paramarg0: string, paramarg1: number, paramarg2: Pattern): string;
    static hex<S extends CharSequence, U extends CharSequence, T extends Appendable>(paramarg0: S, paramarg1: number, paramarg2: U, paramarg3: boolean, paramarg4: T): T;
    static hex<S extends CharSequence>(paramarg0: S, paramarg1: number, paramarg2: S): string;
    static hex(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: string): string;
    static hex(paramarg0: CharSequence): string;
    static hex(paramarg0: number): string;
    static hex(paramarg0: number, paramarg1: number): string;
    static highBit(paramarg0: number): number;
    static isUnprintable(paramarg0: number): boolean;
    static joinStrings(paramarg0: CharSequence, paramarg1: CharSequence[]): string;
    static lengthFromCodePointAndLength(paramarg0: number): number;
    static lookup(paramarg0: string, paramarg1: string[]): number;
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
    static split(paramarg0: string, paramarg1: string): string[];
    static split(paramarg0: string, paramarg1: string, paramarg2: string[]): void;
    static splitString(paramarg0: string, paramarg1: string): string[];
    static splitWhitespace(paramarg0: string): string[];
    static unescape(paramarg0: CharSequence): string;
    static unescapeAndLengthAt(paramarg0: CharSequence, paramarg1: number): number;
    static unescapeLeniently(paramarg0: CharSequence): string;
    static valueOf(paramarg0: number[]): string;
    constructor()
}