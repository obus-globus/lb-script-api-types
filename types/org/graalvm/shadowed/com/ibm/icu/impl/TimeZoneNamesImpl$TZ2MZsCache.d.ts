import type { SoftCache } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/SoftCache.d.ts'
import type { TimeZoneNamesImpl$MZMapEntry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TimeZoneNamesImpl$MZMapEntry.d.ts'
export class TimeZoneNamesImpl$TZ2MZsCache extends SoftCache<string, TimeZoneNamesImpl$MZMapEntry[], string> {
    private constructor()
    createInstance(key: string, data: string): TimeZoneNamesImpl$MZMapEntry[];
}