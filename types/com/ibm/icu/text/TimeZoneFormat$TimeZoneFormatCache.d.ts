import type { SoftCache } from '../../../../com/ibm/icu/impl/SoftCache.d.ts'
import type { TimeZoneFormat } from '../../../../com/ibm/icu/text/TimeZoneFormat.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
export class TimeZoneFormat$TimeZoneFormatCache extends SoftCache<ULocale, TimeZoneFormat, ULocale> {
    private constructor()
    createInstance(arg0: ULocale, arg1: ULocale): TimeZoneFormat;
}