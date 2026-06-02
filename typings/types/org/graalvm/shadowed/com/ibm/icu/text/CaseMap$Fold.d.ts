import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { CaseMap } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CaseMap.d.ts'
import type { CaseMap$Lower } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CaseMap$Lower.d.ts'
import type { CaseMap$Title } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CaseMap$Title.d.ts'
import type { CaseMap$Upper } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CaseMap$Upper.d.ts'
import type { Edits } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Edits.d.ts'
export class CaseMap$Fold extends CaseMap {
    static fold(): CaseMap$Fold;
    static toLower(): CaseMap$Lower;
    static toTitle(): CaseMap$Title;
    static toUpper(): CaseMap$Upper;
    private constructor(opt: number)
    apply(src: CharSequence): string;
    apply<A extends Appendable>(src: CharSequence, dest: A, edits: Edits): A;
    omitUnchangedText(): CaseMap$Fold;
    turkic(): CaseMap$Fold;
}