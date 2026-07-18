import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Formatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Formatter.d.ts'
import type { FormatterFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormatterFactory.d.ts'
export class DateTimeFormatterFactory extends Object implements FormatterFactory {
    constructor(kind: string)
    // private kind: string;
    createFormatter(locale: Locale, fixedOptions: JavaMap<string, Object>): Formatter;
}