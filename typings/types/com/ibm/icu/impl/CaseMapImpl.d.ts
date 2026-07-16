import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { Edits } from '../../../../com/ibm/icu/text/Edits.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CaseMapImpl extends Object {
    static OMIT_UNCHANGED_TEXT: number;
    static TITLECASE_ADJUST_TO_CASED: number;
    static TITLECASE_SENTENCES: number;
    static TITLECASE_WHOLE_STRING: number;
    static addTitleAdjustmentOption(paramarg0: number, paramarg1: number): number;
    static addTitleIteratorOption(paramarg0: number, paramarg1: number): number;
    static fold<A extends Appendable>(paramarg0: number, paramarg1: CharSequence, paramarg2: A, paramarg3: Edits): A;
    static fold(paramarg0: number, paramarg1: CharSequence): string;
    static getTitleBreakIterator(paramarg0: ULocale, paramarg1: number, paramarg2: BreakIterator): BreakIterator;
    static getTitleBreakIterator(paramarg0: Locale, paramarg1: number, paramarg2: BreakIterator): BreakIterator;
    static toLower<A extends Appendable>(paramarg0: number, paramarg1: number, paramarg2: CharSequence, paramarg3: A, paramarg4: Edits): A;
    static toLower(paramarg0: number, paramarg1: number, paramarg2: CharSequence): string;
    static toTitle<A extends Appendable>(paramarg0: number, paramarg1: number, paramarg2: BreakIterator, paramarg3: CharSequence, paramarg4: A, paramarg5: Edits): A;
    static toTitle(paramarg0: number, paramarg1: number, paramarg2: BreakIterator, paramarg3: CharSequence): string;
    static toUpper<A extends Appendable>(paramarg0: number, paramarg1: number, paramarg2: CharSequence, paramarg3: A, paramarg4: Edits): A;
    static toUpper(paramarg0: number, paramarg1: number, paramarg2: CharSequence): string;
    constructor()
}