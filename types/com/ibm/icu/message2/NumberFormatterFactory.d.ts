import type { Formatter } from '../../../../com/ibm/icu/message2/Formatter.d.ts'
import type { FormatterFactory } from '../../../../com/ibm/icu/message2/FormatterFactory.d.ts'
import type { Selector } from '../../../../com/ibm/icu/message2/Selector.d.ts'
import type { SelectorFactory } from '../../../../com/ibm/icu/message2/SelectorFactory.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NumberFormatterFactory extends Object implements FormatterFactory, SelectorFactory {
    constructor(arg0: string)
    // private kind: string;
    createFormatter(arg0: Locale, arg1: { [key: string]: Object }): Formatter;
    createSelector(arg0: Locale, arg1: { [key: string]: Object }): Selector;
}