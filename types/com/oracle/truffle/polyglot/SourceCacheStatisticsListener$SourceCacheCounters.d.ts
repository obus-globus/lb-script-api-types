import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceCacheListener$CacheType } from '../../../../com/oracle/truffle/polyglot/SourceCacheListener$CacheType.d.ts'
import type { SourceCacheStatisticsListener$CacheEventType } from '../../../../com/oracle/truffle/polyglot/SourceCacheStatisticsListener$CacheEventType.d.ts'
import type { SourceCacheStatisticsListener$LongStatistics } from '../../../../com/oracle/truffle/polyglot/SourceCacheStatisticsListener$LongStatistics.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SourceCacheStatisticsListener$SourceCacheCounters extends Object {
    private constructor(sharingLayerId: number, cacheType: SourceCacheListener$CacheType, leaf: boolean, keyFixed: string, keyVariable: string, sortString: string)
    // private cacheType: SourceCacheListener$CacheType;
    // private eventCount: AtomicLong;
    // private evictionCountBytes: AtomicLong;
    // private evictionCountCharacters: AtomicLong;
    // private failureParseSizeBytes: SourceCacheStatisticsListener$LongStatistics;
    // private failureParseSizeCharacters: SourceCacheStatisticsListener$LongStatistics;
    // private failureParseTimeBytes: SourceCacheStatisticsListener$LongStatistics;
    // private failureParseTimeCharacters: SourceCacheStatisticsListener$LongStatistics;
    // private failures: { [key: string]: number };
    // private finalized: boolean;
    // private hitCountBytes: AtomicLong;
    // private hitCountCharacters: AtomicLong;
    // private key: string;
    // private keyFixedLengthPrefix: string;
    // private keyVariableLengthSuffix: string;
    // private missCountBytes: AtomicLong;
    // private missCountCharacters: AtomicLong;
    // private missParseSizeBytes: SourceCacheStatisticsListener$LongStatistics;
    // private missParseSizeCharacters: SourceCacheStatisticsListener$LongStatistics;
    // private missParseTimeBytes: SourceCacheStatisticsListener$LongStatistics;
    // private missParseTimeCharacters: SourceCacheStatisticsListener$LongStatistics;
    // private nestedCounters: { [key: string]: SourceCacheStatisticsListener$SourceCacheCounters };
    // private sharingLayerId: number;
    // private sortString: string;
    // private sourceSizeBytes: SourceCacheStatisticsListener$LongStatistics;
    // private sourceSizeCharacters: SourceCacheStatisticsListener$LongStatistics;
    // private sources: string[];
    // private finalizeCounters(): void;
    // private incrementCount(source: Source, counterCharacters: AtomicLong, counterBytes: AtomicLong): void;
    // private update(source: Source, eventType: SourceCacheStatisticsListener$CacheEventType, parseTime: number, failure: string): void;
    // private updateSourceSizeStatistics(source: Source, sourceKey: string, statsCharacters: SourceCacheStatisticsListener$LongStatistics, statsBytes: SourceCacheStatisticsListener$LongStatistics): void;
    // private updateSourceTimeStatistics(source: Source, sourceKey: string, statsCharacters: SourceCacheStatisticsListener$LongStatistics, statsBytes: SourceCacheStatisticsListener$LongStatistics, parseTime: number): void;
}