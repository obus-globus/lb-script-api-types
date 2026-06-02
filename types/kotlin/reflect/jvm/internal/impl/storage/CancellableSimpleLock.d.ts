import type { InterruptedException } from '../../../../../../java/lang/InterruptedException.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Lock } from '../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { DefaultSimpleLock } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/DefaultSimpleLock.d.ts'
import type { SimpleLock$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/SimpleLock$Companion.d.ts'
export class CancellableSimpleLock extends DefaultSimpleLock {
    static Companion: SimpleLock$Companion;
    constructor(arg0: () => void, arg1: Function1<InterruptedException, void>)
    constructor(arg0: Lock, arg1: () => void, arg2: Function1<InterruptedException, void>)
    // private checkCancelled: () => void;
    // private interruptedExceptionHandler: (param0: InterruptedException) => void;
    lock(): void;
}