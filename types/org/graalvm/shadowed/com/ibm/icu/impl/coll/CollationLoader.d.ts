import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CollationTailoring } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationTailoring.d.ts'
import type { Output } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Output.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class CollationLoader extends Object {
    static getRootRules(): string;
    static loadTailoring(paramlocale: ULocale, paramoutValidLocale: Output<ULocale>): CollationTailoring;
    private constructor()
}