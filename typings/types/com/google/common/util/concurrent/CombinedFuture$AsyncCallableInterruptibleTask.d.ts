import type { AsyncCallable } from '../../../../../com/google/common/util/concurrent/AsyncCallable.d.ts'
import type { CombinedFuture$CombinedFutureInterruptibleTask } from '../../../../../com/google/common/util/concurrent/CombinedFuture$CombinedFutureInterruptibleTask.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
export class CombinedFuture$AsyncCallableInterruptibleTask extends CombinedFuture$CombinedFutureInterruptibleTask<Object> {
    constructor(null_: CombinedFuture$AsyncCallableInterruptibleTask, listenerExecutor: Executor)
    // private callable: () => V;
    runInterruptibly(): ListenableFuture<V>;
    setValue(value: ListenableFuture<V>): void;
    toPendingString(): string;
}