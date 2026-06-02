import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { CaseMap } from '../../../../com/ibm/icu/text/CaseMap.d.ts'
import type { CaseMap$Fold } from '../../../../com/ibm/icu/text/CaseMap$Fold.d.ts'
import type { CaseMap$Lower } from '../../../../com/ibm/icu/text/CaseMap$Lower.d.ts'
import type { CaseMap$Upper } from '../../../../com/ibm/icu/text/CaseMap$Upper.d.ts'
import type { Edits } from '../../../../com/ibm/icu/text/Edits.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CaseMap$Title extends CaseMap {
    static fold(): CaseMap$Fold;
    static toLower(): CaseMap$Lower;
    static toTitle(): CaseMap$Title;
    static toUpper(): CaseMap$Upper;
    private constructor(arg0: number)
    adjustToCased(): CaseMap$Title;
    apply(arg0: Locale, arg1: BreakIterator, arg2: CharSequence): string;
    apply<A extends Appendable>(arg0: Locale, arg1: BreakIterator, arg2: CharSequence, arg3: A, arg4: Edits): A;
    noBreakAdjustment(): CaseMap$Title;
    noLowercase(): CaseMap$Title;
    omitUnchangedText(): CaseMap$Title;
    sentences(): CaseMap$Title;
    wholeString(): CaseMap$Title;
}