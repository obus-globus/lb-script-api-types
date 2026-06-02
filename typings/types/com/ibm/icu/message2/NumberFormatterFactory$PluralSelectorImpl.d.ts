import type { Selector } from '../../../../com/ibm/icu/message2/Selector.d.ts'
import type { LocalizedNumberFormatter } from '../../../../com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { PluralRules } from '../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NumberFormatterFactory$PluralSelectorImpl extends Object implements Selector {
    private constructor(arg0: Locale, arg1: PluralRules, arg2: { [key: string]: Object }, arg3: string)
    // private fixedOptions: { [key: string]: Object };
    // private icuFormatter: LocalizedNumberFormatter;
    // private kind: string;
    // private rules: PluralRules;
    // private matches(arg0: Object, arg1: string, arg2: { [key: string]: Object }): boolean;
    matches(arg0: Object, arg1: string[], arg2: { [key: string]: Object }): string[];
}