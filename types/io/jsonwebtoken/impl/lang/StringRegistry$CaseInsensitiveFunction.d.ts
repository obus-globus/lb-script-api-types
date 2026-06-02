import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StringRegistry$CaseInsensitiveFunction extends Object implements Function<string, string> {
    private constructor(arg0: Locale)
    // private LOCALE: Locale;
    apply(arg0: string): string;
}