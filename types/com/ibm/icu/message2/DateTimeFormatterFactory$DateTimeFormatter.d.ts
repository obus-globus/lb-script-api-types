import type { FormattedPlaceholder } from '../../../../com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { Formatter } from '../../../../com/ibm/icu/message2/Formatter.d.ts'
import type { DateFormat } from '../../../../com/ibm/icu/text/DateFormat.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DateTimeFormatterFactory$DateTimeFormatter extends Object implements Formatter {
    private constructor(arg0: Locale, arg1: DateFormat, arg2: boolean)
    // private icuFormatter: DateFormat;
    // private locale: Locale;
    // private reportErrors: boolean;
    format(arg0: Object, arg1: { [key: string]: Object }): FormattedPlaceholder;
    formatToString(arg0: Object, arg1: { [key: string]: Object }): string;
}