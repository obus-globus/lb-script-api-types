import type { Selector } from '../../../../com/ibm/icu/message2/Selector.d.ts'
import type { SelectorFactory } from '../../../../com/ibm/icu/message2/SelectorFactory.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TextSelectorFactory extends Object implements SelectorFactory {
    constructor()
    createSelector(arg0: Locale, arg1: { [key: string]: Object }): Selector;
}