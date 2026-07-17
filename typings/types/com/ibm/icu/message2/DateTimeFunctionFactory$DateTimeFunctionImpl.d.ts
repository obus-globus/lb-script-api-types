import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { FormattedPlaceholder } from '../../../../com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { Function } from '../../../../com/ibm/icu/message2/Function.d.ts'
import type { DateFormat } from '../../../../com/ibm/icu/text/DateFormat.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DateTimeFunctionFactory$DateTimeFunctionImpl extends Object implements Function {
    private constructor(arg0: Locale, arg1: DateFormat, arg2: boolean)
    // private icuFormatter: DateFormat;
    // private locale: Locale;
    // private reportErrors: boolean;
    format(arg0: Object, arg1: JavaMap<string, Object>): FormattedPlaceholder;
    formatToString(arg0: Object, arg1: JavaMap<string, Object>): string;
    matches(arg0: Object, arg1: string[], arg2: JavaMap<string, Object>): string[];
}