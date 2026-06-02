import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { PolyglotSharingLayer } from '../../../../com/oracle/truffle/polyglot/PolyglotSharingLayer.d.ts'
import type { SourceCacheListener$CacheType } from '../../../../com/oracle/truffle/polyglot/SourceCacheListener$CacheType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface SourceCacheListener extends Object{
    onCacheEvict(source: Source, target: CallTarget, cacheType: SourceCacheListener$CacheType, hits: number): void;
    onCacheFail(sharingLayer: PolyglotSharingLayer, source: Source, cacheType: SourceCacheListener$CacheType, startTime: number, throwable: Throwable): void;
    onCacheHit(source: Source, target: CallTarget, cacheType: SourceCacheListener$CacheType, hits: number): void;
    onCacheMiss(source: Source, target: CallTarget, cacheType: SourceCacheListener$CacheType, startTime: number): void;
}