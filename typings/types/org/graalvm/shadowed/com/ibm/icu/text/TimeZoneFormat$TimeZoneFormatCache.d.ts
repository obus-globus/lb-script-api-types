import type { SoftCache } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/SoftCache.d.ts'
import type { TimeZoneFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneFormat.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class TimeZoneFormat$TimeZoneFormatCache extends SoftCache<ULocale, TimeZoneFormat, ULocale> {
    private constructor()
    createInstance(key: ULocale, data: ULocale): TimeZoneFormat;
}