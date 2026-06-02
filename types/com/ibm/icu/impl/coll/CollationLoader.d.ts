import type { CollationTailoring } from '../../../../../com/ibm/icu/impl/coll/CollationTailoring.d.ts'
import type { Output } from '../../../../../com/ibm/icu/util/Output.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CollationLoader extends Object {
    static getRootRules(): string;
    static loadTailoring(paramarg0: ULocale, paramarg1: Output<ULocale>): CollationTailoring;
    private constructor()
}