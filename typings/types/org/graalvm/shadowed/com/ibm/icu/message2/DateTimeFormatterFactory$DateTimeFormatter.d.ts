import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedPlaceholder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { Formatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Formatter.d.ts'
import type { DateFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormat.d.ts'
export class DateTimeFormatterFactory$DateTimeFormatter extends Object implements Formatter {
    private constructor(locale: Locale, df: DateFormat)
    // private icuFormatter: DateFormat;
    // private locale: Locale;
    format(toFormat: Object, variableOptions: JavaMap<string, Object>): FormattedPlaceholder;
    formatToString(toFormat: Object, variableOptions: JavaMap<string, Object>): string;
}