import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { FilteredBreakIteratorBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/FilteredBreakIteratorBuilder.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class SimpleFilteredSentenceBreakIterator$Builder extends FilteredBreakIteratorBuilder {
    static getEmptyInstance(): FilteredBreakIteratorBuilder;
    static getInstance(paramwhere: Locale): FilteredBreakIteratorBuilder;
    static getInstance(paramwhere: ULocale): FilteredBreakIteratorBuilder;
    constructor()
    constructor(loc: Locale)
    constructor(loc: ULocale)
    // private filterSet: CharSequence[];
    suppressBreakAfter(str: CharSequence): boolean;
    unsuppressBreakAfter(str: CharSequence): boolean;
    wrapIteratorWithFilter(adoptBreakIterator: BreakIterator): BreakIterator;
}