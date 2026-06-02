import type { CaseMap } from '../../../../com/ibm/icu/text/CaseMap.d.ts'
import type { CaseMap$Lower } from '../../../../com/ibm/icu/text/CaseMap$Lower.d.ts'
import type { CaseMap$Title } from '../../../../com/ibm/icu/text/CaseMap$Title.d.ts'
import type { CaseMap$Upper } from '../../../../com/ibm/icu/text/CaseMap$Upper.d.ts'
import type { Edits } from '../../../../com/ibm/icu/text/Edits.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CaseMap$Fold extends CaseMap {
    static fold(): CaseMap$Fold;
    static toLower(): CaseMap$Lower;
    static toTitle(): CaseMap$Title;
    static toUpper(): CaseMap$Upper;
    private constructor(arg0: number)
    apply(arg0: CharSequence): string;
    apply<A extends Appendable>(arg0: CharSequence, arg1: A, arg2: Edits): A;
    omitUnchangedText(): CaseMap$Fold;
    turkic(): CaseMap$Fold;
}