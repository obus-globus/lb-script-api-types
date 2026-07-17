import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { FormattedPlaceholder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { Function } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Function.d.ts'
import type { LocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { PluralRules } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
export class NumberFunctionFactory$NumberFunctionImpl extends Object implements Function {
    constructor(locale: Locale, rules: PluralRules, fixedOptions: JavaMap<string, Object>, kind: string)
    // private fixedOptions: JavaMap<string, Object>;
    // private icuFormatter: LocalizedNumberFormatter;
    // private kind: string;
    // private locale: Locale;
    // private rules: PluralRules;
    format(toFormat: Object, variableOptions: JavaMap<string, Object>): FormattedPlaceholder;
    formatToString(toFormat: Object, variableOptions: JavaMap<string, Object>): string;
    getIcuFormatter(): LocalizedNumberFormatter;
    matches(value: Object, keys: string[], variableOptions: JavaMap<string, Object>): string[];
    // private matches(value: Object, key: string, variableOptions: JavaMap<string, Object>): boolean;
    // private resolveValue(toFormat: Object, variableOptions: JavaMap<string, Object>): Number;
}