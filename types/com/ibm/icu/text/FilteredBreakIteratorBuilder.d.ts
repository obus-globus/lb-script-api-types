import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class FilteredBreakIteratorBuilder extends Object {
    static getEmptyInstance(): FilteredBreakIteratorBuilder;
    static getInstance(paramarg0: ULocale): FilteredBreakIteratorBuilder;
    static getInstance(paramarg0: Locale): FilteredBreakIteratorBuilder;
    constructor()
    suppressBreakAfter(arg0: CharSequence): boolean;
    unsuppressBreakAfter(arg0: CharSequence): boolean;
    wrapIteratorWithFilter(arg0: BreakIterator): BreakIterator;
}