import type { Appendable } from '../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { BigDecimal } from '../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../java/math/BigInteger.d.ts'
import type { MathContext } from '../../java/math/MathContext.d.ts'
import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Pattern } from '../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { StringCompanionObject } from '../../kotlin/jvm/internal/StringCompanionObject.d.ts'
import type { CharIterator } from '../../kotlin/collections/CharIterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
import type { StringsKt__StringsJVMKt } from '../../kotlin/text/StringsKt__StringsJVMKt.d.ts'
export class StringsKt__StringsKt extends StringsKt__StringsJVMKt {
    static append<T extends Appendable>(self: T, ...value: (CharSequence | null)[]): T;
    static append(self: StringBuilder, ...value: (Object | null)[]): StringBuilder;
    static append(self: StringBuilder, ...value: (string | null)[]): StringBuilder;
    static appendElement<T extends unknown>(self: Appendable, element: T, transform: ((param0: T) => CharSequence) | null): void;
    static appendRange<T extends Appendable>(self: T, value: CharSequence, startIndex: number, endIndex: number): T;
    static appendln(self: Appendable): Appendable;
    static appendln(self: StringBuilder): StringBuilder;
    static capitalize(self: string): string;
    static capitalize(self: string, locale: Locale): string;
    static clear(self: StringBuilder): StringBuilder;
    static commonPrefixWith(self: CharSequence, other: CharSequence, ignoreCase: boolean): string;
    static commonSuffixWith(self: CharSequence, other: CharSequence, ignoreCase: boolean): string;
    static compareTo(self: string, other: string, ignoreCase: boolean): number;
    static concatToString(self: string[]): string;
    static concatToString(self: string[], startIndex: number, endIndex: number): string;
    static contains(self: CharSequence, char: string, ignoreCase: boolean): boolean;
    static contains(self: CharSequence, other: CharSequence, ignoreCase: boolean): boolean;
    static contentEquals(self: CharSequence | null, other: CharSequence | null): boolean;
    static contentEquals(self: CharSequence | null, other: CharSequence | null, ignoreCase: boolean): boolean;
    static contentEqualsIgnoreCaseImpl(self: CharSequence | null, other: CharSequence | null): boolean;
    static contentEqualsImpl(self: CharSequence | null, other: CharSequence | null): boolean;
    static decapitalize(self: string): string;
    static decapitalize(self: string, locale: Locale): string;
    static decodeToString(self: number[]): string;
    static decodeToString(self: number[], startIndex: number, endIndex: number, throwOnInvalidSequence: boolean): string;
    static encodeToByteArray(self: string): number[];
    static encodeToByteArray(self: string, startIndex: number, endIndex: number, throwOnInvalidSequence: boolean): number[];
    static endsWith(self: string, suffix: string, ignoreCase: boolean): boolean;
    static endsWith(self: CharSequence, char: string, ignoreCase: boolean): boolean;
    static endsWith(self: CharSequence, suffix: CharSequence, ignoreCase: boolean): boolean;
    static equals(self: string | null, other: string | null, ignoreCase: boolean): boolean;
    static findAnyOf(self: CharSequence, strings: string[], startIndex: number, ignoreCase: boolean): Pair<number, string> | null;
    static findLastAnyOf(self: CharSequence, strings: string[], startIndex: number, ignoreCase: boolean): Pair<number, string> | null;
    static getCASE_INSENSITIVE_ORDER(paramarg0: StringCompanionObject): (param0: string, param1: string) => number;
    static getIndices(paramarg0: CharSequence): { start: number; endInclusive: number; step: number };
    static getLastIndex(paramarg0: CharSequence): number;
    static hasSurrogatePairAt(self: CharSequence, index: number): boolean;
    static indexOf(self: CharSequence, char: string, startIndex: number, ignoreCase: boolean): number;
    static indexOf(self: CharSequence, string: string, startIndex: number, ignoreCase: boolean): number;
    static indexOfAny(self: CharSequence, chars: string[], startIndex: number, ignoreCase: boolean): number;
    static indexOfAny(self: CharSequence, strings: string[], startIndex: number, ignoreCase: boolean): number;
    static isBlank(self: CharSequence): boolean;
    static iterator(self: CharSequence): CharIterator;
    static lastIndexOf(self: CharSequence, char: string, startIndex: number, ignoreCase: boolean): number;
    static lastIndexOf(self: CharSequence, string: string, startIndex: number, ignoreCase: boolean): number;
    static lastIndexOfAny(self: CharSequence, chars: string[], startIndex: number, ignoreCase: boolean): number;
    static lastIndexOfAny(self: CharSequence, strings: string[], startIndex: number, ignoreCase: boolean): number;
    static lineSequence(self: CharSequence): Sequence<string>;
    static lines(self: CharSequence): string[];
    static numberFormatError(input: string): void;
    static padEnd(self: CharSequence, length: number, padChar: string): CharSequence;
    static padEnd(self: string, length: number, padChar: string): string;
    static padStart(self: CharSequence, length: number, padChar: string): CharSequence;
    static padStart(self: string, length: number, padChar: string): string;
    static prependIndent(self: string, indent: string): string;
    static regionMatches(self: CharSequence, thisOffset: number, other: CharSequence, otherOffset: number, length: number, ignoreCase: boolean): boolean;
    static regionMatches(self: string, thisOffset: number, other: string, otherOffset: number, length: number, ignoreCase: boolean): boolean;
    static regionMatchesImpl(self: CharSequence, thisOffset: number, other: CharSequence, otherOffset: number, length: number, ignoreCase: boolean): boolean;
    static removePrefix(self: CharSequence, prefix: CharSequence): CharSequence;
    static removePrefix(self: string, prefix: CharSequence): string;
    static removeRange(self: CharSequence, startIndex: number, endIndex: number): CharSequence;
    static removeRange(self: CharSequence, range: { start: number; endInclusive: number; step: number }): CharSequence;
    static removeSuffix(self: CharSequence, suffix: CharSequence): CharSequence;
    static removeSuffix(self: string, suffix: CharSequence): string;
    static removeSurrounding(self: CharSequence, delimiter: CharSequence): CharSequence;
    static removeSurrounding(self: CharSequence, prefix: CharSequence, suffix: CharSequence): CharSequence;
    static removeSurrounding(self: string, delimiter: CharSequence): string;
    static removeSurrounding(self: string, prefix: CharSequence, suffix: CharSequence): string;
    static repeat(self: CharSequence, n: number): string;
    static replace(self: string, oldChar: string, newChar: string, ignoreCase: boolean): string;
    static replace(self: string, oldValue: string, newValue: string, ignoreCase: boolean): string;
    static replaceAfter(self: string, delimiter: string, replacement: string, missingDelimiterValue: string): string;
    static replaceAfterLast(self: string, delimiter: string, replacement: string, missingDelimiterValue: string): string;
    static replaceBefore(self: string, delimiter: string, replacement: string, missingDelimiterValue: string): string;
    static replaceBeforeLast(self: string, delimiter: string, replacement: string, missingDelimiterValue: string): string;
    static replaceFirst(self: string, oldChar: string, newChar: string, ignoreCase: boolean): string;
    static replaceFirst(self: string, oldValue: string, newValue: string, ignoreCase: boolean): string;
    static replaceIndent(self: string, newIndent: string): string;
    static replaceIndentByMargin(self: string, newIndent: string, marginPrefix: string): string;
    static replaceRange(self: CharSequence, startIndex: number, endIndex: number, replacement: CharSequence): CharSequence;
    static replaceRange(self: CharSequence, range: { start: number; endInclusive: number; step: number }, replacement: CharSequence): CharSequence;
    static requireNonNegativeLimit(limit: number): void;
    static skipWhile(self: string, startIndex: number, predicate: (param0: string) => boolean): number;
    static split(self: CharSequence, regex: Pattern, limit: number): string[];
    static split(self: CharSequence, delimiters: string[], ignoreCase: boolean, limit: number): string[];
    static splitToSequence(self: CharSequence, delimiters: string[], ignoreCase: boolean, limit: number): Sequence<string>;
    static startsWith(self: string, prefix: string, ignoreCase: boolean): boolean;
    static startsWith(self: string, prefix: string, startIndex: number, ignoreCase: boolean): boolean;
    static startsWith(self: CharSequence, char: string, ignoreCase: boolean): boolean;
    static startsWith(self: CharSequence, prefix: CharSequence, ignoreCase: boolean): boolean;
    static startsWith(self: CharSequence, prefix: CharSequence, startIndex: number, ignoreCase: boolean): boolean;
    static subSequence(self: CharSequence, range: { start: number; endInclusive: number; step: number }): CharSequence;
    static substring(self: CharSequence, range: { start: number; endInclusive: number; step: number }): string;
    static substring(self: string, range: { start: number; endInclusive: number; step: number }): string;
    static substringAfter(self: string, delimiter: string, missingDelimiterValue: string): string;
    static substringAfterLast(self: string, delimiter: string, missingDelimiterValue: string): string;
    static substringBefore(self: string, delimiter: string, missingDelimiterValue: string): string;
    static substringBeforeLast(self: string, delimiter: string, missingDelimiterValue: string): string;
    static toBigDecimalOrNull(self: string): BigDecimal | null;
    static toBigDecimalOrNull(self: string, mathContext: MathContext): BigDecimal | null;
    static toBigIntegerOrNull(self: string): BigInteger | null;
    static toBigIntegerOrNull(self: string, radix: number): BigInteger | null;
    static toBooleanStrict(self: string): boolean;
    static toBooleanStrictOrNull(self: string): boolean | null;
    static toByteOrNull(self: string): number | null;
    static toByteOrNull(self: string, radix: number): number | null;
    static toCharArray(self: string, startIndex: number, endIndex: number): string[];
    static toDoubleOrNull(self: string): number | null;
    static toFloatOrNull(self: string): number | null;
    static toIntOrNull(self: string): number | null;
    static toIntOrNull(self: string, radix: number): number | null;
    static toLongOrNull(self: string): number | null;
    static toLongOrNull(self: string, radix: number): number | null;
    static toShortOrNull(self: string): number | null;
    static toShortOrNull(self: string, radix: number): number | null;
    static trim(self: CharSequence): CharSequence;
    static trim(self: CharSequence, ...chars: string[]): CharSequence;
    static trim(self: CharSequence, predicate: (param0: string) => boolean): CharSequence;
    static trim(self: string, ...chars: string[]): string;
    static trim(self: string, predicate: (param0: string) => boolean): string;
    static trimEnd(self: CharSequence): CharSequence;
    static trimEnd(self: CharSequence, ...chars: string[]): CharSequence;
    static trimEnd(self: CharSequence, predicate: (param0: string) => boolean): CharSequence;
    static trimEnd(self: string, ...chars: string[]): string;
    static trimEnd(self: string, predicate: (param0: string) => boolean): string;
    static trimIndent(self: string): string;
    static trimMargin(self: string, marginPrefix: string): string;
    static trimStart(self: CharSequence): CharSequence;
    static trimStart(self: CharSequence, ...chars: string[]): CharSequence;
    static trimStart(self: CharSequence, predicate: (param0: string) => boolean): CharSequence;
    static trimStart(self: string, ...chars: string[]): string;
    static trimStart(self: string, predicate: (param0: string) => boolean): string;
}