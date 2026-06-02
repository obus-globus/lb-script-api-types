import type { Formatter } from '../../../../com/ibm/icu/message2/Formatter.d.ts'
import type { FormatterFactory } from '../../../../com/ibm/icu/message2/FormatterFactory.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IdentityFormatterFactory extends Object implements FormatterFactory {
    constructor()
    createFormatter(arg0: Locale, arg1: { [key: string]: Object }): Formatter;
}