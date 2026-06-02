import type { OlsonTimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/OlsonTimeZone.d.ts'
import type { SoftCache } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/SoftCache.d.ts'
export class ZoneMeta$SystemTimeZoneCache extends SoftCache<string, OlsonTimeZone, string> {
    private constructor()
    createInstance(key: string, data: string): OlsonTimeZone;
}