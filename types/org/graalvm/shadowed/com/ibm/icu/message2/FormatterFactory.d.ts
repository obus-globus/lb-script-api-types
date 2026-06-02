import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Formatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Formatter.d.ts'
export interface FormatterFactory extends Object{
    createFormatter(locale: Locale, fixedOptions: { [key: string]: Object }): Formatter;
}