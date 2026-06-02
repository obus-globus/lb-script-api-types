import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SourceCacheListener$CacheType extends Enum<SourceCacheListener$CacheType> {
    static STRONG: SourceCacheListener$CacheType;
    static UNCACHED: SourceCacheListener$CacheType;
    static WEAK: SourceCacheListener$CacheType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SourceCacheListener$CacheType;
    static values(): (Object | null)[];
    private constructor()
    name(): "WEAK" | "STRONG" | "UNCACHED";
}