import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUCache } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUCache.d.ts'
import type { GenderInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/GenderInfo.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class GenderInfo$Cache extends Object {
    private constructor()
    // private cache: ICUCache<ULocale, GenderInfo>;
    get(locale: ULocale): GenderInfo;
}