import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { Edits } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Edits.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class CaseMapImpl extends Object {
    static OMIT_UNCHANGED_TEXT: number;
    static TITLECASE_ADJUST_TO_CASED: number;
    static TITLECASE_SENTENCES: number;
    static TITLECASE_WHOLE_STRING: number;
    static addTitleAdjustmentOption(paramoptions: number, paramnewOption: number): number;
    static addTitleIteratorOption(paramoptions: number, paramnewOption: number): number;
    static fold<A extends Appendable>(paramoptions: number, paramsrc: CharSequence, paramdest: A, paramedits: Edits): A;
    static fold(paramoptions: number, paramsrc: CharSequence): string;
    static getTitleBreakIterator(paramlocale: Locale, paramoptions: number, paramiter: BreakIterator): BreakIterator;
    static getTitleBreakIterator(paramlocale: ULocale, paramoptions: number, paramiter: BreakIterator): BreakIterator;
    static toLower<A extends Appendable>(paramcaseLocale: number, paramoptions: number, paramsrc: CharSequence, paramdest: A, paramedits: Edits): A;
    static toLower(paramcaseLocale: number, paramoptions: number, paramsrc: CharSequence): string;
    static toTitle<A extends Appendable>(paramcaseLocale: number, paramoptions: number, paramtitleIter: BreakIterator, paramsrc: CharSequence, paramdest: A, paramedits: Edits): A;
    static toTitle(paramcaseLocale: number, paramoptions: number, paramiter: BreakIterator, paramsrc: CharSequence): string;
    static toUpper<A extends Appendable>(paramcaseLocale: number, paramoptions: number, paramsrc: CharSequence, paramdest: A, paramedits: Edits): A;
    static toUpper(paramcaseLocale: number, paramoptions: number, paramsrc: CharSequence): string;
    constructor()
}