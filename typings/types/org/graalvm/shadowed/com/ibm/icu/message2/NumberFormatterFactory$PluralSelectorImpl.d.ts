import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Selector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Selector.d.ts'
import type { LocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { PluralRules } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
export class NumberFormatterFactory$PluralSelectorImpl extends Object implements Selector {
    private constructor(locale: Locale, rules: PluralRules, fixedOptions: JavaMap<string, Object>, kind: string)
    // private fixedOptions: JavaMap<string, Object>;
    // private icuFormatter: LocalizedNumberFormatter;
    // private rules: PluralRules;
    // private matches(value: Object, key: string, variableOptions: JavaMap<string, Object>): boolean;
    matches(value: Object, keys: string[], variableOptions: JavaMap<string, Object>): string[];
}