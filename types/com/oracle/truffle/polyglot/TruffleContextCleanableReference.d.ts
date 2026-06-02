import type { TruffleContext } from '../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleContextCleanableReference extends WeakReference<TruffleContext> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(referent: TruffleContext, polyglotContext: PolyglotContextImpl)
    // private polyglotContext: PolyglotContextImpl;
}