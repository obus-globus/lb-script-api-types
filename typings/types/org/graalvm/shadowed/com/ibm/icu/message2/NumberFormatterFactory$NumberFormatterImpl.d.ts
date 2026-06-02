import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedPlaceholder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { Formatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Formatter.d.ts'
import type { LocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
export class NumberFormatterFactory$NumberFormatterImpl extends Object implements Formatter {
    constructor(locale: Locale, fixedOptions: { [key: string]: Object }, kind: string)
    // private advanced: boolean;
    // private fixedOptions: { [key: string]: Object };
    // private icuFormatter: LocalizedNumberFormatter;
    // private kind: string;
    // private locale: Locale;
    format(toFormat: Object, variableOptions: { [key: string]: Object }): FormattedPlaceholder;
    formatToString(toFormat: Object, variableOptions: { [key: string]: Object }): string;
    getIcuFormatter(): LocalizedNumberFormatter;
}