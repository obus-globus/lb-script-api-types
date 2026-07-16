import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SourceCacheListener$CacheType extends Enum<SourceCacheListener$CacheType> {
    static STRONG: SourceCacheListener$CacheType;
    static UNCACHED: SourceCacheListener$CacheType;
    static WEAK: SourceCacheListener$CacheType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SourceCacheListener$CacheType;
    static values(): SourceCacheListener$CacheType[];
    private constructor()
    name(): "WEAK" | "STRONG" | "UNCACHED";
}