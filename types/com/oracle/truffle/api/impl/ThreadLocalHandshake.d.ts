import type { TruffleLogger } from '../../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { TruffleSafepoint } from '../../../../../com/oracle/truffle/api/TruffleSafepoint.d.ts'
import type { ThreadLocalHandshake$ActivationResult } from '../../../../../com/oracle/truffle/api/impl/ThreadLocalHandshake$ActivationResult.d.ts'
import type { ThreadLocalHandshake$Handshake } from '../../../../../com/oracle/truffle/api/impl/ThreadLocalHandshake$Handshake.d.ts'
import type { ThreadLocalHandshake$TruffleSafepointImpl } from '../../../../../com/oracle/truffle/api/impl/ThreadLocalHandshake$TruffleSafepointImpl.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ThreadLocalHandshake extends Object {
    constructor()
    activateThread(s: TruffleSafepoint, f: Future<Object>): ThreadLocalHandshake$ActivationResult;
    // private addHandshakes(threads: Thread[], handshake: ThreadLocalHandshake$Handshake<T>): void;
    clearFastPending(): void;
    deactivateThread(s: TruffleSafepoint, f: Future<Object>): boolean;
    ensureThreadInitialized(): void;
    getCurrent(): ThreadLocalHandshake$TruffleSafepointImpl;
    getThreadState(thread: Thread): ThreadLocalHandshake$TruffleSafepointImpl;
    isAllowActions(safepoint: TruffleSafepoint): boolean;
    isSupported(): boolean;
    poll(enclosingNode: Node): void;
    processHandshake(location: Node): void;
    runThreadLocal<T extends Consumer<Node>>(polyglotContext: Object, threads: Thread[], onThread: T, onDone: (param0: T) => void, notifyBlockedConsumer: (param0: Node) => void, notifyUnblockedConsumer: (param0: Node) => void, sideEffecting: boolean, recurring: boolean, syncStartOfEvent: boolean, syncEndOfEvent: boolean, syncActionMaxWait: number, syncActionPrintStackTraces: boolean, engineLogger: TruffleLogger): Future<void>;
    setChangeAllowActions(safepoint: TruffleSafepoint, enabled: boolean): boolean;
    setFastPending(t: Thread): void;
    testSupport(): void;
}