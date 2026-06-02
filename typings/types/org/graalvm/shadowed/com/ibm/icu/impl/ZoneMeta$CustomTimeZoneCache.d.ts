import type { SoftCache } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/SoftCache.d.ts'
import type { SimpleTimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/SimpleTimeZone.d.ts'
export class ZoneMeta$CustomTimeZoneCache extends SoftCache<number, SimpleTimeZone, number[]> {
    private constructor()
    createInstance(key: number, data: number[]): SimpleTimeZone;
}