import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { SoftCache } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/SoftCache.d.ts'
export class TimeZoneNamesImpl$MZ2TZsCache extends SoftCache<string, JavaMap<string, string>, string> {
    private constructor()
    createInstance(key: string, data: string): JavaMap<string, string>;
}