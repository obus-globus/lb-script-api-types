import type { SoftCache } from '../../../../com/ibm/icu/impl/SoftCache.d.ts'
import type { SimpleTimeZone } from '../../../../com/ibm/icu/util/SimpleTimeZone.d.ts'
export class ZoneMeta$CustomTimeZoneCache extends SoftCache<number, SimpleTimeZone, number[]> {
    private constructor()
    createInstance(arg0: number, arg1: number[]): SimpleTimeZone;
}