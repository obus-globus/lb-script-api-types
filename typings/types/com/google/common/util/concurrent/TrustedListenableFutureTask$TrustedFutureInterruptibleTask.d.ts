import type { InterruptibleTask } from '../../../../../com/google/common/util/concurrent/InterruptibleTask.d.ts'
import type { TrustedListenableFutureTask } from '../../../../../com/google/common/util/concurrent/TrustedListenableFutureTask.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class TrustedListenableFutureTask$TrustedFutureInterruptibleTask extends InterruptibleTask<V> {
    constructor(null_: TrustedListenableFutureTask<V>, callable: () => V)
    // private callable: () => V;
    afterRanInterruptiblyFailure(error: Throwable): void;
    afterRanInterruptiblySuccess<V extends unknown>(result: V): void;
    isDone(): boolean;
    runInterruptibly<V extends unknown>(): V;
    toPendingString(): string;
}