import type { CollationData } from '../../../../../com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationSettings } from '../../../../../com/ibm/icu/impl/coll/CollationSettings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class CollationFastLatin extends Object {
    static BAIL_OUT_RESULT: number;
    static LATIN_LIMIT: number;
    static LATIN_MAX: number;
    static VERSION: number;
    static compareUTF16(paramarg0: string[], paramarg1: string[], paramarg2: number, paramarg3: CharSequence, paramarg4: CharSequence, paramarg5: number): number;
    static getOptions(paramarg0: CollationData, paramarg1: CollationSettings, paramarg2: string[]): number;
    private constructor()
}