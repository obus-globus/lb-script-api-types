import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotSourceCache } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache.d.ts'
import type { PolyglotSourceCache$Cache } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache$Cache.d.ts'
import type { PolyglotSourceCache$ParseOrigin } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache$ParseOrigin.d.ts'
import type { PolyglotSourceCache$SourceKey } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache$SourceKey.d.ts'
import type { PolyglotSourceCache$StrongCacheValue } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache$StrongCacheValue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotSourceCache$StrongCache extends PolyglotSourceCache$Cache {
    private constructor(null_: PolyglotSourceCache)
    // private sourceCache: Map<PolyglotSourceCache$SourceKey, PolyglotSourceCache$StrongCacheValue>;
    isEmpty(): boolean;
    listSources(polyglot: PolyglotImpl, sources: Object[]): void;
    lookup(origin: PolyglotSourceCache$ParseOrigin, context: PolyglotLanguageContext, source: Source, argumentNames: string[], parse: boolean): CallTarget;
}