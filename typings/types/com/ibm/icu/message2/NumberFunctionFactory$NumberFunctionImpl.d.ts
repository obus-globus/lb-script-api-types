import type { FormattedPlaceholder } from '../../../../com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { Function } from '../../../../com/ibm/icu/message2/Function.d.ts'
import type { LocalizedNumberFormatter } from '../../../../com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { PluralRules } from '../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class NumberFunctionFactory$NumberFunctionImpl extends Object implements Function {
    constructor(arg0: Locale, arg1: PluralRules, arg2: { [key: string]: Object }, arg3: string)
    // private fixedOptions: { [key: string]: Object };
    // private icuFormatter: LocalizedNumberFormatter;
    // private kind: string;
    // private locale: Locale;
    // private rules: PluralRules;
    format(arg0: Object, arg1: { [key: string]: Object }): FormattedPlaceholder;
    formatToString(arg0: Object, arg1: { [key: string]: Object }): string;
    getIcuFormatter(): LocalizedNumberFormatter;
    matches(arg0: Object, arg1: string[], arg2: { [key: string]: Object }): string[];
    // private matches(arg0: Object, arg1: string, arg2: { [key: string]: Object }): boolean;
    // private resolveValue(arg0: Object, arg1: { [key: string]: Object }): Number;
}