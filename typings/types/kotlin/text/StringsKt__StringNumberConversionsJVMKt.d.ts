import type { Appendable } from '../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { BigDecimal } from '../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../java/math/BigInteger.d.ts'
import type { MathContext } from '../../java/math/MathContext.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { StringsKt__StringBuilderKt } from '../../kotlin/text/StringsKt__StringBuilderKt.d.ts'
export class StringsKt__StringNumberConversionsJVMKt extends StringsKt__StringBuilderKt {
    static append<T extends Appendable>(self: T, ...value: (CharSequence | null)[]): T;
    static append(self: StringBuilder, ...value: (Object | null)[]): StringBuilder;
    static append(self: StringBuilder, ...value: (string | null)[]): StringBuilder;
    static appendElement<T extends unknown>(self: Appendable, element: T, transform: ((param0: T) => CharSequence) | null): void;
    static appendRange<T extends Appendable>(self: T, value: CharSequence, startIndex: number, endIndex: number): T;
    static appendln(self: Appendable): Appendable;
    static appendln(self: StringBuilder): StringBuilder;
    static clear(self: StringBuilder): StringBuilder;
    static prependIndent(self: string, indent: string): string;
    static replaceIndent(self: string, newIndent: string): string;
    static replaceIndentByMargin(self: string, newIndent: string, marginPrefix: string): string;
    static toBigDecimalOrNull(self: string): BigDecimal | null;
    static toBigDecimalOrNull(self: string, mathContext: MathContext): BigDecimal | null;
    static toBigIntegerOrNull(self: string): BigInteger | null;
    static toBigIntegerOrNull(self: string, radix: number): BigInteger | null;
    static toDoubleOrNull(self: string): number | null;
    static toFloatOrNull(self: string): number | null;
    static trimIndent(self: string): string;
    static trimMargin(self: string, marginPrefix: string): string;
}