import type { CaseMap } from '../../../../com/ibm/icu/text/CaseMap.d.ts'
import type { CaseMap$Fold } from '../../../../com/ibm/icu/text/CaseMap$Fold.d.ts'
import type { CaseMap$Lower } from '../../../../com/ibm/icu/text/CaseMap$Lower.d.ts'
import type { CaseMap$Title } from '../../../../com/ibm/icu/text/CaseMap$Title.d.ts'
import type { Edits } from '../../../../com/ibm/icu/text/Edits.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CaseMap$Upper extends CaseMap {
    static fold(): CaseMap$Fold;
    static toLower(): CaseMap$Lower;
    static toTitle(): CaseMap$Title;
    static toUpper(): CaseMap$Upper;
    private constructor(arg0: number)
    apply(arg0: Locale, arg1: CharSequence): string;
    apply<A extends Appendable>(arg0: Locale, arg1: CharSequence, arg2: A, arg3: Edits): A;
    omitUnchangedText(): CaseMap$Upper;
}