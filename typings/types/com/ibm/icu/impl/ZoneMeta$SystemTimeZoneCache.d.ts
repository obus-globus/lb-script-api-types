import type { OlsonTimeZone } from '../../../../com/ibm/icu/impl/OlsonTimeZone.d.ts'
import type { SoftCache } from '../../../../com/ibm/icu/impl/SoftCache.d.ts'
export class ZoneMeta$SystemTimeZoneCache extends SoftCache<string, OlsonTimeZone, string> {
    private constructor()
    createInstance(arg0: string, arg1: string): OlsonTimeZone;
}