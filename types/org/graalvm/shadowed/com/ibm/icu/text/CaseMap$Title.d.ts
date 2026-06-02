import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { CaseMap } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CaseMap.d.ts'
import type { CaseMap$Fold } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CaseMap$Fold.d.ts'
import type { CaseMap$Lower } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CaseMap$Lower.d.ts'
import type { CaseMap$Upper } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CaseMap$Upper.d.ts'
import type { Edits } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Edits.d.ts'
export class CaseMap$Title extends CaseMap {
    static fold(): CaseMap$Fold;
    static toLower(): CaseMap$Lower;
    static toTitle(): CaseMap$Title;
    static toUpper(): CaseMap$Upper;
    private constructor(opt: number)
    adjustToCased(): CaseMap$Title;
    apply(locale: Locale, iter: BreakIterator, src: CharSequence): string;
    apply<A extends Appendable>(locale: Locale, iter: BreakIterator, src: CharSequence, dest: A, edits: Edits): A;
    noBreakAdjustment(): CaseMap$Title;
    noLowercase(): CaseMap$Title;
    omitUnchangedText(): CaseMap$Title;
    sentences(): CaseMap$Title;
    wholeString(): CaseMap$Title;
}