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
    static fold(paramarg0: number, paramarg1: CharSequence, paramarg2: Appendable | null, paramarg3: Edits): Appendable | null;
    static fold(paramarg0: number, paramarg1: CharSequence): string;
    static getTitleBreakIterator(paramarg0: ULocale, paramarg1: number, paramarg2: BreakIterator): BreakIterator;
    static getTitleBreakIterator(paramarg0: Locale, paramarg1: number, paramarg2: BreakIterator): BreakIterator;
    static toLower(paramarg0: number, paramarg1: number, paramarg2: CharSequence, paramarg3: Appendable | null, paramarg4: Edits): Appendable | null;
    static toLower(paramarg0: number, paramarg1: number, paramarg2: CharSequence): string;
    static toTitle(paramarg0: number, paramarg1: number, paramarg2: BreakIterator, paramarg3: CharSequence, paramarg4: Appendable | null, paramarg5: Edits): Appendable | null;
    static toTitle(paramarg0: number, paramarg1: number, paramarg2: BreakIterator, paramarg3: CharSequence): string;
    static toUpper(paramarg0: number, paramarg1: number, paramarg2: CharSequence, paramarg3: Appendable | null, paramarg4: Edits): Appendable | null;
    static toUpper(paramarg0: number, paramarg1: number, paramarg2: CharSequence): string;
    constructor()
}