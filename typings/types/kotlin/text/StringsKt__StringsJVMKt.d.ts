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
    static append(paramarg0: Appendable | null, ...paramarg1: (Object | null)[]): Appendable | null;
    static append(paramarg0: StringBuilder, ...paramarg1: (Object | null)[]): StringBuilder;
    static append(paramarg0: StringBuilder, ...paramarg1: (Object | null)[]): StringBuilder;
    static appendElement(paramarg0: Appendable, paramarg1: Object | null, paramarg2: (param0: Object) => CharSequence): void;
    static appendRange(paramarg0: Appendable | null, paramarg1: CharSequence, paramarg2: number, paramarg3: number): Appendable | null;
    static appendln(paramarg0: Appendable): Appendable;
    static appendln(paramarg0: StringBuilder): StringBuilder;
    static capitalize(paramarg0: string): string;
    static capitalize(paramarg0: string, paramarg1: Locale): string;
    static clear(paramarg0: StringBuilder): StringBuilder;
    static compareTo(paramarg0: string, paramarg1: string, paramarg2: boolean): number;
    static concatToString(paramarg0: string[]): string;
    static concatToString(paramarg0: string[], paramarg1: number, paramarg2: number): string;
    static contentEquals(paramarg0: CharSequence, paramarg1: CharSequence): boolean;
    static contentEquals(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: boolean): boolean;
    static decapitalize(paramarg0: string): string;
    static decapitalize(paramarg0: string, paramarg1: Locale): string;
    static decodeToString(paramarg0: number[]): string;
    static decodeToString(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: boolean): string;
    static encodeToByteArray(paramarg0: string): number[];
    static encodeToByteArray(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: boolean): number[];
    static endsWith(paramarg0: string, paramarg1: string, paramarg2: boolean): boolean;
    static equals(paramarg0: string, paramarg1: string, paramarg2: boolean): boolean;
    static getCASE_INSENSITIVE_ORDER(paramarg0: StringCompanionObject): (param0: Object) => boolean;
    static numberFormatError(paramarg0: string): void;
    static prependIndent(paramarg0: string, paramarg1: string): string;
    static regionMatches(paramarg0: CharSequence, paramarg1: number, paramarg2: CharSequence, paramarg3: number, paramarg4: number, paramarg5: boolean): boolean;
    static regionMatches(paramarg0: string, paramarg1: number, paramarg2: string, paramarg3: number, paramarg4: number, paramarg5: boolean): boolean;
    static repeat(paramarg0: CharSequence, paramarg1: number): string;
    static replace(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: boolean): string;
    static replace(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: boolean): string;
    static replaceFirst(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: boolean): string;
    static replaceFirst(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: boolean): string;
    static replaceIndent(paramarg0: string, paramarg1: string): string;
    static replaceIndentByMargin(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static split(paramarg0: CharSequence, paramarg1: Pattern, paramarg2: number): string[];
    static startsWith(paramarg0: string, paramarg1: string, paramarg2: boolean): boolean;
    static startsWith(paramarg0: string, paramarg1: string, paramarg2: number, paramarg3: boolean): boolean;
    static toBigDecimalOrNull(paramarg0: string): BigDecimal;
    static toBigDecimalOrNull(paramarg0: string, paramarg1: MathContext): BigDecimal;
    static toBigIntegerOrNull(paramarg0: string): BigInteger;
    static toBigIntegerOrNull(paramarg0: string, paramarg1: number): BigInteger;
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
    static trimIndent(paramarg0: string): string;
    static trimMargin(paramarg0: string, paramarg1: string): string;
}