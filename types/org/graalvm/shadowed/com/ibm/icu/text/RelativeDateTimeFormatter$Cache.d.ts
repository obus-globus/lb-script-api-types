import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CacheBase } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CacheBase.d.ts'
import type { RelativeDateTimeFormatter$RelativeDateTimeFormatterData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$RelativeDateTimeFormatterData.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class RelativeDateTimeFormatter$Cache extends Object {
    private constructor()
    // private cache: CacheBase<string, RelativeDateTimeFormatter$RelativeDateTimeFormatterData, ULocale>;
    get(locale: ULocale): RelativeDateTimeFormatter$RelativeDateTimeFormatterData;
}