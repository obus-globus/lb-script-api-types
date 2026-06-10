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
import type { StringsKt__StringsKt } from '../../kotlin/text/StringsKt__StringsKt.d.ts'
export class StringsKt___StringsJvmKt extends StringsKt__StringsKt {
    static append(paramarg0: Appendable | null, paramarg1: (Object | null)[]): Appendable | null;
    static append(paramarg0: StringBuilder, paramarg1: (Object | null)[]): StringBuilder;
    static append(paramarg0: StringBuilder, paramarg1: (Object | null)[]): StringBuilder;
    static appendElement(paramarg0: Appendable, paramarg1: Object | null, paramarg2: (param0: Object) => CharSequence): void;
    static appendRange(paramarg0: Appendable | null, paramarg1: CharSequence, paramarg2: number, paramarg3: number): Appendable | null;
    static appendln(paramarg0: Appendable): Appendable;
    static appendln(paramarg0: StringBuilder): StringBuilder;
    static capitalize(paramarg0: string): string;
    static capitalize(paramarg0: string, paramarg1: Locale): string;
    static clear(paramarg0: StringBuilder): StringBuilder;
    static commonPrefixWith(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: boolean): string;
    static commonSuffixWith(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: boolean): string;
    static compareTo(paramarg0: string, paramarg1: string, paramarg2: boolean): number;
    static concatToString(paramarg0: string[]): string;
    static concatToString(paramarg0: string[], paramarg1: number, paramarg2: number): string;
    static contains(paramarg0: CharSequence, paramarg1: string, paramarg2: boolean): boolean;
    static contains(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: boolean): boolean;
    static contentEquals(paramarg0: CharSequence, paramarg1: CharSequence): boolean;
    static contentEquals(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: boolean): boolean;
    static contentEqualsIgnoreCaseImpl(paramarg0: CharSequence, paramarg1: CharSequence): boolean;
    static contentEqualsImpl(paramarg0: CharSequence, paramarg1: CharSequence): boolean;
    static decapitalize(paramarg0: string): string;
    static decapitalize(paramarg0: string, paramarg1: Locale): string;
    static decodeToString(paramarg0: number[]): string;
    static decodeToString(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: boolean): string;
    static encodeToByteArray(paramarg0: string): number[];
    static encodeToByteArray(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: boolean): number[];
    static endsWith(paramarg0: string, paramarg1: string, paramarg2: boolean): boolean;
    static endsWith(paramarg0: CharSequence, paramarg1: string, paramarg2: boolean): boolean;
    static endsWith(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: boolean): boolean;
    static equals(paramarg0: string, paramarg1: string, paramarg2: boolean): boolean;
    static findAnyOf(paramarg0: CharSequence, paramarg1: string[], paramarg2: number, paramarg3: boolean): Pair<number, string>;
    static findLastAnyOf(paramarg0: CharSequence, paramarg1: string[], paramarg2: number, paramarg3: boolean): Pair<number, string>;
    static getCASE_INSENSITIVE_ORDER(paramarg0: StringCompanionObject): (param0: Object) => boolean;
    static getIndices(paramarg0: CharSequence): { start: number; endInclusive: number; step: number };
    static getLastIndex(paramarg0: CharSequence): number;
    static hasSurrogatePairAt(paramarg0: CharSequence, paramarg1: number): boolean;
    static indexOf(paramarg0: CharSequence, paramarg1: string, paramarg2: number, paramarg3: boolean): number;
    static indexOf(paramarg0: CharSequence, paramarg1: string, paramarg2: number, paramarg3: boolean): number;
    static indexOfAny(paramarg0: CharSequence, paramarg1: string[], paramarg2: number, paramarg3: boolean): number;
    static indexOfAny(paramarg0: CharSequence, paramarg1: string[], paramarg2: number, paramarg3: boolean): number;
    static isBlank(paramarg0: CharSequence): boolean;
    static iterator(paramarg0: CharSequence): CharIterator;
    static lastIndexOf(paramarg0: CharSequence, paramarg1: string, paramarg2: number, paramarg3: boolean): number;
    static lastIndexOf(paramarg0: CharSequence, paramarg1: string, paramarg2: number, paramarg3: boolean): number;
    static lastIndexOfAny(paramarg0: CharSequence, paramarg1: string[], paramarg2: number, paramarg3: boolean): number;
    static lastIndexOfAny(paramarg0: CharSequence, paramarg1: string[], paramarg2: number, paramarg3: boolean): number;
    static lineSequence(paramarg0: CharSequence): Sequence<string>;
    static lines(paramarg0: CharSequence): string[];
    static max(paramarg0: CharSequence): string;
    static maxBy(paramarg0: CharSequence, paramarg1: (param0: Object) => Object | null): string;
    static maxWith(paramarg0: CharSequence, paramarg1: (param0: Object) => boolean): string;
    static min(paramarg0: CharSequence): string;
    static minBy(paramarg0: CharSequence, paramarg1: (param0: Object) => Object | null): string;
    static minWith(paramarg0: CharSequence, paramarg1: (param0: Object) => boolean): string;
    static numberFormatError(paramarg0: string): void;
    static padEnd(paramarg0: CharSequence, paramarg1: number, paramarg2: string): CharSequence;
    static padEnd(paramarg0: string, paramarg1: number, paramarg2: string): string;
    static padStart(paramarg0: CharSequence, paramarg1: number, paramarg2: string): CharSequence;
    static padStart(paramarg0: string, paramarg1: number, paramarg2: string): string;
    static prependIndent(paramarg0: string, paramarg1: string): string;
    static regionMatches(paramarg0: CharSequence, paramarg1: number, paramarg2: CharSequence, paramarg3: number, paramarg4: number, paramarg5: boolean): boolean;
    static regionMatches(paramarg0: string, paramarg1: number, paramarg2: string, paramarg3: number, paramarg4: number, paramarg5: boolean): boolean;
    static regionMatchesImpl(paramarg0: CharSequence, paramarg1: number, paramarg2: CharSequence, paramarg3: number, paramarg4: number, paramarg5: boolean): boolean;
    static removePrefix(paramarg0: CharSequence, paramarg1: CharSequence): CharSequence;
    static removePrefix(paramarg0: string, paramarg1: CharSequence): string;
    static removeRange(paramarg0: CharSequence, paramarg1: number, paramarg2: number): CharSequence;
    static removeRange(paramarg0: CharSequence, paramarg1: { start: number; endInclusive: number; step: number }): CharSequence;
    static removeSuffix(paramarg0: CharSequence, paramarg1: CharSequence): CharSequence;
    static removeSuffix(paramarg0: string, paramarg1: CharSequence): string;
    static removeSurrounding(paramarg0: CharSequence, paramarg1: CharSequence): CharSequence;
    static removeSurrounding(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: CharSequence): CharSequence;
    static removeSurrounding(paramarg0: string, paramarg1: CharSequence): string;
    static removeSurrounding(paramarg0: string, paramarg1: CharSequence, paramarg2: CharSequence): string;
    static repeat(paramarg0: CharSequence, paramarg1: number): string;
    static replace(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: boolean): string;
    static replace(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: boolean): string;
    static replaceAfter(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string): string;
    static replaceAfter(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string): string;
    static replaceAfterLast(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string): string;
    static replaceAfterLast(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string): string;
    static replaceBefore(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string): string;
    static replaceBefore(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string): string;
    static replaceBeforeLast(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string): string;
    static replaceBeforeLast(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string): string;
    static replaceFirst(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: boolean): string;
    static replaceFirst(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: boolean): string;
    static replaceIndent(paramarg0: string, paramarg1: string): string;
    static replaceIndentByMargin(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static replaceRange(paramarg0: CharSequence, paramarg1: number, paramarg2: number, paramarg3: CharSequence): CharSequence;
    static replaceRange(paramarg0: CharSequence, paramarg1: { start: number; endInclusive: number; step: number }, paramarg2: CharSequence): CharSequence;
    static requireNonNegativeLimit(paramarg0: number): void;
    static skipWhile(paramarg0: string, paramarg1: number, paramarg2: (param0: Object) => boolean): number;
    static split(paramarg0: CharSequence, paramarg1: Pattern, paramarg2: number): string[];
    static split(paramarg0: CharSequence, paramarg1: string[], paramarg2: boolean, paramarg3: number): string[];
    static split(paramarg0: CharSequence, paramarg1: (Object | null)[], paramarg2: boolean, paramarg3: number): string[];
    static splitToSequence(paramarg0: CharSequence, paramarg1: string[], paramarg2: boolean, paramarg3: number): Sequence<string>;
    static splitToSequence(paramarg0: CharSequence, paramarg1: (Object | null)[], paramarg2: boolean, paramarg3: number): Sequence<string>;
    static startsWith(paramarg0: string, paramarg1: string, paramarg2: boolean): boolean;
    static startsWith(paramarg0: string, paramarg1: string, paramarg2: number, paramarg3: boolean): boolean;
    static startsWith(paramarg0: CharSequence, paramarg1: string, paramarg2: boolean): boolean;
    static startsWith(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: boolean): boolean;
    static startsWith(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: number, paramarg3: boolean): boolean;
    static subSequence(paramarg0: CharSequence, paramarg1: { start: number; endInclusive: number; step: number }): CharSequence;
    static substring(paramarg0: CharSequence, paramarg1: { start: number; endInclusive: number; step: number }): string;
    static substring(paramarg0: string, paramarg1: { start: number; endInclusive: number; step: number }): string;
    static substringAfter(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static substringAfter(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static substringAfterLast(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static substringAfterLast(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static substringBefore(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static substringBefore(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static substringBeforeLast(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static substringBeforeLast(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static toBigDecimalOrNull(paramarg0: string): BigDecimal;
    static toBigDecimalOrNull(paramarg0: string, paramarg1: MathContext): BigDecimal;
    static toBigIntegerOrNull(paramarg0: string): BigInteger;
    static toBigIntegerOrNull(paramarg0: string, paramarg1: number): BigInteger;
    static toBooleanStrict(paramarg0: string): boolean;
    static toBooleanStrictOrNull(paramarg0: string): boolean;
    static toByteOrNull(paramarg0: string): number;
    static toByteOrNull(paramarg0: string, paramarg1: number): number;
    static toCharArray(paramarg0: string, paramarg1: number, paramarg2: number): string[];
    static toDoubleOrNull(paramarg0: string): number;
    static toFloatOrNull(paramarg0: string): number;
    static toIntOrNull(paramarg0: string): number;
    static toIntOrNull(paramarg0: string, paramarg1: number): number;
    static toLongOrNull(paramarg0: string): number;
    static toLongOrNull(paramarg0: string, paramarg1: number): number;
    static toShortOrNull(paramarg0: string): number;
    static toShortOrNull(paramarg0: string, paramarg1: number): number;
    static toSortedSet(paramarg0: CharSequence): string[];
    static trim(paramarg0: CharSequence): CharSequence;
    static trim(paramarg0: CharSequence, paramarg1: string[]): CharSequence;
    static trim(paramarg0: CharSequence, paramarg1: (param0: Object) => boolean): CharSequence;
    static trim(paramarg0: string, paramarg1: string[]): string;
    static trim(paramarg0: string, paramarg1: (param0: Object) => boolean): string;
    static trimEnd(paramarg0: CharSequence): CharSequence;
    static trimEnd(paramarg0: CharSequence, paramarg1: string[]): CharSequence;
    static trimEnd(paramarg0: CharSequence, paramarg1: (param0: Object) => boolean): CharSequence;
    static trimEnd(paramarg0: string, paramarg1: string[]): string;
    static trimEnd(paramarg0: string, paramarg1: (param0: Object) => boolean): string;
    static trimIndent(paramarg0: string): string;
    static trimMargin(paramarg0: string, paramarg1: string): string;
    static trimStart(paramarg0: CharSequence): CharSequence;
    static trimStart(paramarg0: CharSequence, paramarg1: string[]): CharSequence;
    static trimStart(paramarg0: CharSequence, paramarg1: (param0: Object) => boolean): CharSequence;
    static trimStart(paramarg0: string, paramarg1: string[]): string;
    static trimStart(paramarg0: string, paramarg1: (param0: Object) => boolean): string;
}