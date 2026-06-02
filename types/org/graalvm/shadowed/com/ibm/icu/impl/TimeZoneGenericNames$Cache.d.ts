import type { SoftCache } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/SoftCache.d.ts'
import type { TimeZoneGenericNames } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TimeZoneGenericNames.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class TimeZoneGenericNames$Cache extends SoftCache<string, TimeZoneGenericNames, ULocale> {
    private constructor()
    createInstance(key: string, data: ULocale): TimeZoneGenericNames;
}