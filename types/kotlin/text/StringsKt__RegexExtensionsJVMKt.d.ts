import type { Appendable } from '../../java/lang/Appendable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { StringsKt__IndentKt } from '../../kotlin/text/StringsKt__IndentKt.d.ts'
export class StringsKt__RegexExtensionsJVMKt extends StringsKt__IndentKt {
    static append(paramarg0: Object | null, paramarg1: (Object | null)[]): Object | null;
    static appendElement(paramarg0: Appendable, paramarg1: Object | null, paramarg2: Function1<Object, Object>): void;
    static appendRange(paramarg0: Object | null, paramarg1: CharSequence, paramarg2: number, paramarg3: number): Object | null;
    static prependIndent(paramarg0: string, paramarg1: string): string;
    static replaceIndent(paramarg0: string, paramarg1: string): string;
    static replaceIndentByMargin(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static trimIndent(paramarg0: string): string;
    static trimMargin(paramarg0: string, paramarg1: string): string;
}