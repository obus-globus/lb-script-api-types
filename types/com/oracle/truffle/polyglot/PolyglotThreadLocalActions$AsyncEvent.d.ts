import type { ThreadLocalAction } from '../../../../com/oracle/truffle/api/ThreadLocalAction.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotThreadLocalActions$AbstractTLHandshake } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadLocalActions$AbstractTLHandshake.d.ts'
import type { PolyglotThreadLocalActions$HandshakeConfig } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadLocalActions$HandshakeConfig.d.ts'
import type { PolyglotThreadLocalActions$PolyglotTLAccess } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadLocalActions$PolyglotTLAccess.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
export class PolyglotThreadLocalActions$AsyncEvent extends PolyglotThreadLocalActions$AbstractTLHandshake {
    constructor(context: PolyglotContextImpl, filerThreads: Thread[], originId: string, action: ThreadLocalAction, config: PolyglotThreadLocalActions$HandshakeConfig)
    acceptImpl(access: PolyglotThreadLocalActions$PolyglotTLAccess): void;
}