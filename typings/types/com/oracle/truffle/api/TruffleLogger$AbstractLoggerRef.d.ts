import type { TruffleLogger } from '../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TruffleLogger$AbstractLoggerRef extends WeakReference<TruffleLogger> implements Closeable {
    static reachabilityFence(paramarg0: Object): void;
    constructor(logger: TruffleLogger)
    // private closed: AtomicBoolean;
    close(): void;
    shouldClose(): boolean;
}