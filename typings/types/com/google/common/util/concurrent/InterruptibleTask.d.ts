import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class InterruptibleTask<T extends unknown> extends AtomicReference<() => void> implements Runnable {
    constructor()
    afterRanInterruptiblyFailure(error: Throwable): void;
    afterRanInterruptiblySuccess(result: T): void;
    interruptTask(): void;
    isDone(): boolean;
    run(): void;
    runInterruptibly(): T;
    toPendingString(): string;
    toString(): string;
    // private waitForInterrupt(currentThread: Thread): void;
}