import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CaseMap$Fold } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CaseMap$Fold.d.ts'
import type { CaseMap$Lower } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CaseMap$Lower.d.ts'
import type { CaseMap$Title } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CaseMap$Title.d.ts'
import type { CaseMap$Upper } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CaseMap$Upper.d.ts'
export abstract class CaseMap extends Object {
    static fold(): CaseMap$Fold;
    static toLower(): CaseMap$Lower;
    static toTitle(): CaseMap$Title;
    static toUpper(): CaseMap$Upper;
    private constructor(opt: number)
    // private internalOptions: number;
    omitUnchangedText(): CaseMap;
}