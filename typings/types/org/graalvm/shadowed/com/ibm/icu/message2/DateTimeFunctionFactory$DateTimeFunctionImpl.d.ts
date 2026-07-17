import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedPlaceholder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { Function } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Function.d.ts'
import type { DateFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormat.d.ts'
export class DateTimeFunctionFactory$DateTimeFunctionImpl extends Object implements Function {
    private constructor(locale: Locale, df: DateFormat, reportErrors: boolean)
    // private icuFormatter: DateFormat;
    // private locale: Locale;
    // private reportErrors: boolean;
    format(toFormat: Object, variableOptions: JavaMap<string, Object>): FormattedPlaceholder;
    formatToString(toFormat: Object, variableOptions: JavaMap<string, Object>): string;
    matches(value: Object, keys: string[], variableOptions: JavaMap<string, Object>): string[];
}