import type { AsyncCallable } from '../../../../../com/google/common/util/concurrent/AsyncCallable.d.ts'
import type { InterruptibleTask } from '../../../../../com/google/common/util/concurrent/InterruptibleTask.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class TrustedListenableFutureTask$TrustedFutureInterruptibleAsyncTask extends InterruptibleTask<ListenableFuture<V>> {
    constructor(null_: TrustedListenableFutureTask$TrustedFutureInterruptibleAsyncTask)
    // private callable: () => V;
    afterRanInterruptiblyFailure(error: Throwable): void;
    afterRanInterruptiblySuccess(result: ListenableFuture<V>): void;
    isDone(): boolean;
    runInterruptibly(): ListenableFuture<V>;
    toPendingString(): string;
}