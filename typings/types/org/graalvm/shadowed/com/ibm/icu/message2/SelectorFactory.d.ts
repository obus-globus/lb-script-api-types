import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Selector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Selector.d.ts'
export interface SelectorFactory extends Object{
    createSelector(locale: Locale, fixedOptions: { [key: string]: Object }): Selector;
}