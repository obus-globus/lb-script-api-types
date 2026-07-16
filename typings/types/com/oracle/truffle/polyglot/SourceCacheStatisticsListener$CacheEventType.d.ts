import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SourceCacheStatisticsListener$CacheEventType extends Enum<SourceCacheStatisticsListener$CacheEventType> {
    static EVICT: SourceCacheStatisticsListener$CacheEventType;
    static FAIL: SourceCacheStatisticsListener$CacheEventType;
    static HIT: SourceCacheStatisticsListener$CacheEventType;
    static MISS: SourceCacheStatisticsListener$CacheEventType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SourceCacheStatisticsListener$CacheEventType;
    static values(): SourceCacheStatisticsListener$CacheEventType[];
    private constructor()
    name(): "HIT" | "MISS" | "EVICT" | "FAIL";
}