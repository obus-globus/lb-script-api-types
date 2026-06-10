import type { ThreadLocalAction } from '../../../../com/oracle/truffle/api/ThreadLocalAction.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotThreadLocalActions$HandshakeConfig } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadLocalActions$HandshakeConfig.d.ts'
import type { PolyglotThreadLocalActions$PolyglotTLAccess } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadLocalActions$PolyglotTLAccess.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export abstract class PolyglotThreadLocalActions$AbstractTLHandshake extends Object implements Consumer<Node> {
    constructor(context: PolyglotContextImpl, filterThreads: Thread[], originId: string, action: ThreadLocalAction, config: PolyglotThreadLocalActions$HandshakeConfig)
    // private action: ThreadLocalAction;
    // private config: PolyglotThreadLocalActions$HandshakeConfig;
    // private context: PolyglotContextImpl;
    // private debugId: number;
    // private filterThreads: Thread[];
    // private future: Future<void>;
    // private notifyBlockedConsumer: (param0: Node) => void;
    // private notifyUnblockedConsumer: (param0: Node) => void;
    // private originId: string;
    // private rawFuture: Future<void>;
    accept(location: Node): void;
    acceptImpl(access: PolyglotThreadLocalActions$PolyglotTLAccess): void;
    andThen(arg0: (param0: Node) => void): (param0: Node) => void;
    isEnabledForThread(currentThread: Thread): boolean;
    notifyBlocked(location: Node, blocked: boolean): void;
    notifyDone(): void;
    // private notifyFailed(t: Throwable): void;
    // private notifyStart(): void;
    // private notifySuccess(): void;
    resubmitRecurring(): Future<void>;
    toString(): string;
}