import type { TruffleLogger } from '../../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { ThreadLocalHandshake$Barrier } from '../../../../../com/oracle/truffle/api/impl/ThreadLocalHandshake$Barrier.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Future$State } from '../../../../../java/util/concurrent/Future$State.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ThreadLocalHandshake$Handshake<T extends Consumer<Node>> extends Object implements Future<void> {
    constructor(polyglotContext: Object, initialThreads: Thread[], action: T, onDone: (param0: T) => void, notifyBlockedConsumer: (param0: Node) => void, notifyUnblockedConsumer: (param0: Node) => void, sideEffecting: boolean, recurring: boolean, numberOfThreads: number, syncStartOfEvent: boolean, syncEndOfEvent: boolean, syncActionMaxWait: number, syncActionPrintStackTraces: boolean, engineLogger: TruffleLogger)
    // private action: T;
    readonly cancelled: boolean;
    // private endBarrier: ThreadLocalHandshake$Barrier;
    // private engineLogger: TruffleLogger;
    // private notifyBlockedConsumer: (param0: Node) => void;
    // private notifyUnblockedConsumer: (param0: Node) => void;
    // private onDone: (param0: T) => void;
    // private polyglotContext: Object;
    // private recurring: boolean;
    // private sideEffecting: boolean;
    // private startBarrier: ThreadLocalHandshake$Barrier;
    // private syncActionMaxWait: number;
    // private syncActionPrintStackTraces: boolean;
    // private syncEndOfEvent: boolean;
    // private syncStartOfEvent: boolean;
    // private threads: Map<Thread, boolean>;
    // private warned: AtomicBoolean;
    activateThread(): boolean;
    // private await(barrier: ThreadLocalHandshake$Barrier): void;
    // private awaitTimeout(barrier: ThreadLocalHandshake$Barrier): boolean;
    cancel(mayInterruptIfRunning: boolean): boolean;
    deactivateThread(): void;
    exceptionNow(): Throwable;
    get(): void;
    get(timeout: number, unit: TimeUnit): void;
    isCancelled(): boolean;
    isDone(): boolean;
    // private isTerminated(): boolean;
    perform(node: Node): void;
    resultNow(): void;
    state(): Future$State;
    toString(): string;
}