import type { PolyglotIsolateGuestSupport$Lazy } from '../../../../../com/oracle/truffle/polyglot/isolate/PolyglotIsolateGuestSupport$Lazy.d.ts'
import type { AbstractPolyglotImpl } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$ThreadScope } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$ThreadScope.d.ts'
export class PolyglotIsolateGuestSupport$HostThreadScope extends AbstractPolyglotImpl$ThreadScope {
    constructor(impl: AbstractPolyglotImpl, l: PolyglotIsolateGuestSupport$Lazy)
    // private detachFromHost: boolean;
    // private polyglotThread: boolean;
    close(): void;
}