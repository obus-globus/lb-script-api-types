import type { ICUCache } from '../../../../com/ibm/icu/impl/ICUCache.d.ts'
import type { GenderInfo } from '../../../../com/ibm/icu/util/GenderInfo.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GenderInfo$Cache extends Object {
    private constructor()
    // private cache: ICUCache<ULocale, GenderInfo>;
    get(arg0: ULocale): GenderInfo;
}