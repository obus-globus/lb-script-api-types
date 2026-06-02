import type { Formatter } from '../../../../com/ibm/icu/message2/Formatter.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FormatterFactory extends Object{
    createFormatter(arg0: Locale, arg1: { [key: string]: Object }): Formatter;
}