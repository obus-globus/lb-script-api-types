import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotSharingLayer } from '../../../../com/oracle/truffle/polyglot/PolyglotSharingLayer.d.ts'
import type { SourceCacheListener } from '../../../../com/oracle/truffle/polyglot/SourceCacheListener.d.ts'
import type { SourceCacheListener$CacheType } from '../../../../com/oracle/truffle/polyglot/SourceCacheListener$CacheType.d.ts'
import type { SourceCacheStatisticsListener$CacheCounterKey } from '../../../../com/oracle/truffle/polyglot/SourceCacheStatisticsListener$CacheCounterKey.d.ts'
import type { SourceCacheStatisticsListener$SourceCacheCounters } from '../../../../com/oracle/truffle/polyglot/SourceCacheStatisticsListener$SourceCacheCounters.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class SourceCacheStatisticsListener extends Object implements SourceCacheListener {
    private constructor(sourceCacheStatisticDetails: boolean)
    // private cacheCounters: Map<SourceCacheStatisticsListener$CacheCounterKey, SourceCacheStatisticsListener$SourceCacheCounters>;
    // private showAllDetails: boolean;
    // private finalizeAllCounters(counters: SourceCacheStatisticsListener$SourceCacheCounters): void;
    // private getCacheCounter(sharingLayerId: number, cacheType: SourceCacheListener$CacheType): SourceCacheStatisticsListener$SourceCacheCounters;
    // private getMaxEntriesPerCategory(): number;
    onCacheEvict(source: Source, target: CallTarget, cacheType: SourceCacheListener$CacheType, hits: number): void;
    onCacheFail(sharingLayer: PolyglotSharingLayer, source: Source, cacheType: SourceCacheListener$CacheType, startTime: number, throwable: Throwable): void;
    onCacheHit(source: Source, target: CallTarget, cacheType: SourceCacheListener$CacheType, hits: number): void;
    onCacheMiss(source: Source, target: CallTarget, cacheType: SourceCacheListener$CacheType, startTime: number): void;
    onEngineClose(engine: PolyglotEngineImpl): void;
    // private printCacheStatistics(indent: number, sb: StringBuilder, languageCounter: SourceCacheStatisticsListener$SourceCacheCounters, characterBased: boolean): void;
    // private printSourcesStatistics(indent: number, sb: StringBuilder, languageCounter: SourceCacheStatisticsListener$SourceCacheCounters, characterBased: boolean): void;
}