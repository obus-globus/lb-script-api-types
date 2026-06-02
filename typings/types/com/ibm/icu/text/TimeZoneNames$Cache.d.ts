import type { SoftCache } from '../../../../com/ibm/icu/impl/SoftCache.d.ts'
import type { TimeZoneNames } from '../../../../com/ibm/icu/text/TimeZoneNames.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
export class TimeZoneNames$Cache extends SoftCache<string, TimeZoneNames, ULocale> {
    private constructor()
    createInstance(arg0: string, arg1: ULocale): TimeZoneNames;
}