import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedPlaceholder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { Formatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Formatter.d.ts'
import type { LocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
export class NumberFormatterFactory$NumberFormatterImpl extends Object implements Formatter {
    constructor(locale: Locale, fixedOptions: JavaMap<string, Object>, kind: string)
    // private advanced: boolean;
    // private fixedOptions: JavaMap<string, Object>;
    // private icuFormatter: LocalizedNumberFormatter;
    // private kind: string;
    // private locale: Locale;
    format(toFormat: Object, variableOptions: JavaMap<string, Object>): FormattedPlaceholder;
    formatToString(toFormat: Object, variableOptions: JavaMap<string, Object>): string;
    getIcuFormatter(): LocalizedNumberFormatter;
}