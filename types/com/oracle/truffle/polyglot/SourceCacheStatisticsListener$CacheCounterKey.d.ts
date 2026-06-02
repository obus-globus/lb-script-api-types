import type { SourceCacheListener$CacheType } from '../../../../com/oracle/truffle/polyglot/SourceCacheListener$CacheType.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SourceCacheStatisticsListener$CacheCounterKey extends Record {
    // private cacheType: SourceCacheListener$CacheType;
    // private sharinglayerId: number;
    cacheType(): SourceCacheListener$CacheType;
    equals(o: Object | null): boolean;
    hashCode(): number;
    sharinglayerId(): number;
    toString(): string;
}