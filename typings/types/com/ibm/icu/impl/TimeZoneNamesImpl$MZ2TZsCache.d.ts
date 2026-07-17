import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { SoftCache } from '../../../../com/ibm/icu/impl/SoftCache.d.ts'
export class TimeZoneNamesImpl$MZ2TZsCache extends SoftCache<string, JavaMap<string, string>, string> {
    private constructor()
    createInstance(arg0: string, arg1: string): JavaMap<string, string>;
}