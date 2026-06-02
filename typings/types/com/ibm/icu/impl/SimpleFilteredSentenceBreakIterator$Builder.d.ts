import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { FilteredBreakIteratorBuilder } from '../../../../com/ibm/icu/text/FilteredBreakIteratorBuilder.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class SimpleFilteredSentenceBreakIterator$Builder extends FilteredBreakIteratorBuilder {
    static getEmptyInstance(): FilteredBreakIteratorBuilder;
    static getInstance(paramarg0: ULocale): FilteredBreakIteratorBuilder;
    static getInstance(paramarg0: Locale): FilteredBreakIteratorBuilder;
    constructor()
    constructor(arg0: ULocale)
    constructor(arg0: Locale)
    // private filterSet: CharSequence[];
    suppressBreakAfter(arg0: CharSequence): boolean;
    unsuppressBreakAfter(arg0: CharSequence): boolean;
    wrapIteratorWithFilter(arg0: BreakIterator): BreakIterator;
}