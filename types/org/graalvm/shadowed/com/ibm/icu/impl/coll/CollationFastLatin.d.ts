import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
import type { CollationData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationSettings } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationSettings.d.ts'
export class CollationFastLatin extends Object {
    static BAIL_OUT_RESULT: number;
    static LATIN_LIMIT: number;
    static LATIN_MAX: number;
    static VERSION: number;
    static compareUTF16(paramtable: string[], paramprimaries: string[], paramoptions: number, paramleft: CharSequence, paramright: CharSequence, paramstartIndex: number): number;
    static getOptions(paramdata: CollationData, paramsettings: CollationSettings, paramprimaries: string[]): number;
    private constructor()
}