import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotSourceCache$ParseOrigin } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache$ParseOrigin.d.ts'
import type { PolyglotSourceCache$StrongCache } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache$StrongCache.d.ts'
import type { PolyglotSourceCache$WeakCache } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache$WeakCache.d.ts'
import type { SourceCacheListener } from '../../../../com/oracle/truffle/polyglot/SourceCacheListener.d.ts'
import type { SourceCacheStatisticsListener } from '../../../../com/oracle/truffle/polyglot/SourceCacheStatisticsListener.d.ts'
import type { TracingSourceCacheListener } from '../../../../com/oracle/truffle/polyglot/TracingSourceCacheListener.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotSourceCache extends Object {
    constructor(deadSourcesQueue: ReferenceQueue<Source>, sourceCacheListener: TracingSourceCacheListener, sourceCacheStatisticsListener: SourceCacheStatisticsListener)
    // private sourceCacheListener: SourceCacheListener;
    // private strongCache: PolyglotSourceCache$StrongCache;
    // private weakCache: PolyglotSourceCache$WeakCache;
    cleanupStaleEntries(): void;
    listCachedSources(polyglot: PolyglotImpl, source: E[]): void;
    parseCached(origin: PolyglotSourceCache$ParseOrigin, context: PolyglotLanguageContext, source: Source, argumentNames: string[]): CallTarget;
    patch(listener: SourceCacheListener, statisticsListener: SourceCacheStatisticsListener): void;
}