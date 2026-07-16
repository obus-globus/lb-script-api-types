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
import type { StringCompanionObject } from '../../kotlin/jvm/internal/StringCompanionObject.d.ts'
import type { StringsKt__StringNumberConversionsKt } from '../../kotlin/text/StringsKt__StringNumberConversionsKt.d.ts'
export class StringsKt__StringsJVMKt extends StringsKt__StringNumberConversionsKt {
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
    static compareTo(self: string, other: string, ignoreCase: boolean): number;
    static concatToString(self: string[]): string;
    static concatToString(self: string[], startIndex: number, endIndex: number): string;
    static contentEquals(self: CharSequence | null, other: CharSequence | null): boolean;
    static contentEquals(self: CharSequence | null, other: CharSequence | null, ignoreCase: boolean): boolean;
    static decapitalize(self: string): string;
    static decapitalize(self: string, locale: Locale): string;
    static decodeToString(self: number[]): string;
    static decodeToString(self: number[], startIndex: number, endIndex: number, throwOnInvalidSequence: boolean): string;
    static encodeToByteArray(self: string): number[];
    static encodeToByteArray(self: string, startIndex: number, endIndex: number, throwOnInvalidSequence: boolean): number[];
    static endsWith(self: string, suffix: string, ignoreCase: boolean): boolean;
    static equals(self: string | null, other: string | null, ignoreCase: boolean): boolean;
    static getCASE_INSENSITIVE_ORDER(paramarg0: StringCompanionObject): (param0: string, param1: string) => number;
    static numberFormatError(input: string): void;
    static prependIndent(self: string, indent: string): string;
    static regionMatches(self: CharSequence, thisOffset: number, other: CharSequence, otherOffset: number, length: number, ignoreCase: boolean): boolean;
    static regionMatches(self: string, thisOffset: number, other: string, otherOffset: number, length: number, ignoreCase: boolean): boolean;
    static repeat(self: CharSequence, n: number): string;
    static replace(self: string, oldChar: string, newChar: string, ignoreCase: boolean): string;
    static replace(self: string, oldValue: string, newValue: string, ignoreCase: boolean): string;
    static replaceFirst(self: string, oldChar: string, newChar: string, ignoreCase: boolean): string;
    static replaceFirst(self: string, oldValue: string, newValue: string, ignoreCase: boolean): string;
    static replaceIndent(self: string, newIndent: string): string;
    static replaceIndentByMargin(self: string, newIndent: string, marginPrefix: string): string;
    static split(self: CharSequence, regex: Pattern, limit: number): string[];
    static startsWith(self: string, prefix: string, ignoreCase: boolean): boolean;
    static startsWith(self: string, prefix: string, startIndex: number, ignoreCase: boolean): boolean;
    static toBigDecimalOrNull(self: string): BigDecimal | null;
    static toBigDecimalOrNull(self: string, mathContext: MathContext): BigDecimal | null;
    static toBigIntegerOrNull(self: string): BigInteger | null;
    static toBigIntegerOrNull(self: string, radix: number): BigInteger | null;
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
    static trimIndent(self: string): string;
    static trimMargin(self: string, marginPrefix: string): string;
}