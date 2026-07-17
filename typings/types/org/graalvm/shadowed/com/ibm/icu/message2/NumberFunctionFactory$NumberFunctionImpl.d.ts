import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { FormattedPlaceholder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { Function } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Function.d.ts'
import type { LocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { PluralRules } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
export class NumberFunctionFactory$NumberFunctionImpl extends Object implements Function {
    constructor(locale: Locale, rules: PluralRules, fixedOptions: { [key: string]: Object }, kind: string)
    // private fixedOptions: { [key: string]: Object };
    // private icuFormatter: LocalizedNumberFormatter;
    // private kind: string;
    // private locale: Locale;
    // private rules: PluralRules;
    format(toFormat: Object, variableOptions: { [key: string]: Object }): FormattedPlaceholder;
    formatToString(toFormat: Object, variableOptions: { [key: string]: Object }): string;
    getIcuFormatter(): LocalizedNumberFormatter;
    matches(value: Object, keys: string[], variableOptions: { [key: string]: Object }): string[];
    // private matches(value: Object, key: string, variableOptions: { [key: string]: Object }): boolean;
    // private resolveValue(toFormat: Object, variableOptions: { [key: string]: Object }): Number;
}