import type { Appendable } from '../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { StringsKt__RegexExtensionsKt } from '../../kotlin/text/StringsKt__RegexExtensionsKt.d.ts'
export class StringsKt__StringBuilderJVMKt extends StringsKt__RegexExtensionsKt {
    static append(paramarg0: Appendable | null, ...paramarg1: CharSequence[]): Appendable | null;
    static appendElement(paramarg0: Appendable, paramarg1: Object | null, paramarg2: (param0: Object) => CharSequence): void;
    static appendRange(paramarg0: Appendable | null, paramarg1: CharSequence, paramarg2: number, paramarg3: number): Appendable | null;
    static appendln(paramarg0: Appendable): Appendable;
    static appendln(paramarg0: StringBuilder): StringBuilder;
    static clear(paramarg0: StringBuilder): StringBuilder;
    static prependIndent(paramarg0: string, paramarg1: string): string;
    static replaceIndent(paramarg0: string, paramarg1: string): string;
    static replaceIndentByMargin(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static trimIndent(paramarg0: string): string;
    static trimMargin(paramarg0: string, paramarg1: string): string;
}