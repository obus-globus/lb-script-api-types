import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class FilteredBreakIteratorBuilder extends Object {
    static getEmptyInstance(): FilteredBreakIteratorBuilder;
    static getInstance(paramwhere: Locale): FilteredBreakIteratorBuilder;
    static getInstance(paramwhere: ULocale): FilteredBreakIteratorBuilder;
    constructor()
    suppressBreakAfter(str: CharSequence): boolean;
    unsuppressBreakAfter(str: CharSequence): boolean;
    wrapIteratorWithFilter(wrappedBreakIterator: BreakIterator): BreakIterator;
}