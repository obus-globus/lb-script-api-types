import type { SoftCache } from '../../../../com/ibm/icu/impl/SoftCache.d.ts'
import type { TimeZoneNamesImpl$MZMapEntry } from '../../../../com/ibm/icu/impl/TimeZoneNamesImpl$MZMapEntry.d.ts'
export class TimeZoneNamesImpl$TZ2MZsCache extends SoftCache<string, TimeZoneNamesImpl$MZMapEntry[], string> {
    private constructor()
    createInstance(arg0: string, arg1: string): TimeZoneNamesImpl$MZMapEntry[];
}