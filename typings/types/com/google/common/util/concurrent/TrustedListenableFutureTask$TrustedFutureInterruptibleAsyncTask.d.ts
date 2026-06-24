import type { AsyncCallable } from '../../../../../com/google/common/util/concurrent/AsyncCallable.d.ts'
import type { InterruptibleTask } from '../../../../../com/google/common/util/concurrent/InterruptibleTask.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { TrustedListenableFutureTask } from '../../../../../com/google/common/util/concurrent/TrustedListenableFutureTask.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class TrustedListenableFutureTask$TrustedFutureInterruptibleAsyncTask extends InterruptibleTask<ListenableFuture<V>> {
    constructor(null_: TrustedListenableFutureTask<V>, callable: () => ListenableFuture<V>)
    // private callable: () => ListenableFuture<V>;
    afterRanInterruptiblyFailure(error: Throwable): void;
    afterRanInterruptiblySuccess<V extends unknown>(result: ListenableFuture<V>): void;
    isDone(): boolean;
    runInterruptibly<V extends unknown>(): ListenableFuture<V>;
    toPendingString(): string;
}