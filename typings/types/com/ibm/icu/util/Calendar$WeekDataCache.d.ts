import type { SoftCache } from '../../../../com/ibm/icu/impl/SoftCache.d.ts'
import type { Calendar$WeekData } from '../../../../com/ibm/icu/util/Calendar$WeekData.d.ts'
export class Calendar$WeekDataCache extends SoftCache<string, Calendar$WeekData, string> {
    private constructor()
    createInstance(arg0: string, arg1: string): Calendar$WeekData;
}