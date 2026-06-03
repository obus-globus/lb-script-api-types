import type { Appendable } from '../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { BigDecimal } from '../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../java/math/BigInteger.d.ts'
import type { MathContext } from '../../java/math/MathContext.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { StringsKt__StringNumberConversionsJVMKt } from '../../kotlin/text/StringsKt__StringNumberConversionsJVMKt.d.ts'
export class StringsKt__StringNumberConversionsKt extends StringsKt__StringNumberConversionsJVMKt {
    static append(paramarg0: Object | null, paramarg1: (Object | null)[]): Object | null;
    static append(paramarg0: StringBuilder, paramarg1: (Object | null)[]): StringBuilder;
    static append(paramarg0: StringBuilder, paramarg1: (Object | null)[]): StringBuilder;
    static appendElement(paramarg0: Appendable, paramarg1: Object | null, paramarg2: (param0: Object | null) => Object | null): void;
    static appendRange(paramarg0: Object | null, paramarg1: CharSequence, paramarg2: number, paramarg3: number): Object | null;
    static appendln(paramarg0: Appendable): Appendable;
    static appendln(paramarg0: StringBuilder): StringBuilder;
    static clear(paramarg0: StringBuilder): StringBuilder;
    static numberFormatError(paramarg0: string): void;
    static prependIndent(paramarg0: string, paramarg1: string): string;
    static replaceIndent(paramarg0: string, paramarg1: string): string;
    static replaceIndentByMargin(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static toBigDecimalOrNull(paramarg0: string): BigDecimal;
    static toBigDecimalOrNull(paramarg0: string, paramarg1: MathContext): BigDecimal;
    static toBigIntegerOrNull(paramarg0: string): BigInteger;
    static toBigIntegerOrNull(paramarg0: string, paramarg1: number): BigInteger;
    static toByteOrNull(paramarg0: string): number;
    static toByteOrNull(paramarg0: string, paramarg1: number): number;
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