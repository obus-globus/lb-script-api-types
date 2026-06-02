import type { Selector } from '../../../../com/ibm/icu/message2/Selector.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SelectorFactory extends Object{
    createSelector(arg0: Locale, arg1: { [key: string]: Object }): Selector;
}