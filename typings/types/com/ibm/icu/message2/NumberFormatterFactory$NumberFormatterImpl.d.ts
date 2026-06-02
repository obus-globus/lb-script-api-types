import type { FormattedPlaceholder } from '../../../../com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { Formatter } from '../../../../com/ibm/icu/message2/Formatter.d.ts'
import type { LocalizedNumberFormatter } from '../../../../com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NumberFormatterFactory$NumberFormatterImpl extends Object implements Formatter {
    constructor(arg0: Locale, arg1: { [key: string]: Object }, arg2: string)
    // private fixedOptions: { [key: string]: Object };
    // private icuFormatter: LocalizedNumberFormatter;
    // private kind: string;
    // private locale: Locale;
    format(arg0: Object, arg1: { [key: string]: Object }): FormattedPlaceholder;
    formatToString(arg0: Object, arg1: { [key: string]: Object }): string;
    getIcuFormatter(): LocalizedNumberFormatter;
}