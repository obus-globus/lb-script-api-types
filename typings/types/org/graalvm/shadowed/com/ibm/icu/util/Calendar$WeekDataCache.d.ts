import type { SoftCache } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/SoftCache.d.ts'
import type { Calendar$WeekData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar$WeekData.d.ts'
export class Calendar$WeekDataCache extends SoftCache<string, Calendar$WeekData, string> {
    private constructor()
    createInstance(key: string, data: string): Calendar$WeekData;
}