import type { SoftCache } from '../../../../com/ibm/icu/impl/SoftCache.d.ts'
import type { TimeZoneGenericNames } from '../../../../com/ibm/icu/impl/TimeZoneGenericNames.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
export class TimeZoneGenericNames$Cache extends SoftCache<string, TimeZoneGenericNames, ULocale> {
    private constructor()
    createInstance(arg0: string, arg1: ULocale): TimeZoneGenericNames;
}