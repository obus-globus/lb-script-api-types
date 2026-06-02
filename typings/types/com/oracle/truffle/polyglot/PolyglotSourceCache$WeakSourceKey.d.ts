import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { PolyglotSourceCache$SourceKey } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache$SourceKey.d.ts'
import type { PolyglotSourceCache$WeakCache } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache$WeakCache.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotSourceCache$WeakSourceKey extends WeakReference<Source> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(key: PolyglotSourceCache$SourceKey, value: Source, cacheRef: WeakReference<PolyglotSourceCache$WeakCache>, q: ReferenceQueue<Source>)
    // private cacheRef: WeakReference<PolyglotSourceCache$WeakCache>;
    // private key: PolyglotSourceCache$SourceKey;
    equals(obj: Object | null): boolean;
    hashCode(): number;
}