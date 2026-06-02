import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { CaseMap } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CaseMap.d.ts'
import type { CaseMap$Fold } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CaseMap$Fold.d.ts'
import type { CaseMap$Title } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CaseMap$Title.d.ts'
import type { CaseMap$Upper } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CaseMap$Upper.d.ts'
import type { Edits } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Edits.d.ts'
export class CaseMap$Lower extends CaseMap {
    static fold(): CaseMap$Fold;
    static toLower(): CaseMap$Lower;
    static toTitle(): CaseMap$Title;
    static toUpper(): CaseMap$Upper;
    private constructor(opt: number)
    apply(locale: Locale, src: CharSequence): string;
    apply<A extends Appendable>(locale: Locale, src: CharSequence, dest: A, edits: Edits): A;
    omitUnchangedText(): CaseMap$Lower;
}