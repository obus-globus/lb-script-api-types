import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotSourceCache$Cache } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache$Cache.d.ts'
import type { PolyglotSourceCache$ParseOrigin } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache$ParseOrigin.d.ts'
import type { PolyglotSourceCache$WeakCacheValue } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache$WeakCacheValue.d.ts'
import type { PolyglotSourceCache$WeakSourceKey } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache$WeakSourceKey.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
export class PolyglotSourceCache$WeakCache extends PolyglotSourceCache$Cache {
    constructor(null_: PolyglotSourceCache$WeakCache)
    // private cacheRef: WeakReference<PolyglotSourceCache$WeakCache>;
    // private deadSources: ReferenceQueue<Source>;
    // private sourceCache: Map<PolyglotSourceCache$WeakSourceKey, PolyglotSourceCache$WeakCacheValue>;
    isEmpty(): boolean;
    listSources(polyglot: PolyglotImpl, sources: E[]): void;
    lookup(origin: PolyglotSourceCache$ParseOrigin, context: PolyglotLanguageContext, source: Source, argumentNames: string[], parse: boolean): CallTarget;
}