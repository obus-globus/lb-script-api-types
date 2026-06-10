import type { AsyncCallable } from '../../../../../com/google/common/util/concurrent/AsyncCallable.d.ts'
import type { CombinedFuture$CombinedFutureInterruptibleTask } from '../../../../../com/google/common/util/concurrent/CombinedFuture$CombinedFutureInterruptibleTask.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CombinedFuture$AsyncCallableInterruptibleTask extends CombinedFuture$CombinedFutureInterruptibleTask<Object> {
    constructor(null_: CombinedFuture$AsyncCallableInterruptibleTask, listenerExecutor: Executor)
    // private callable: () => ListenableFuture<V>;
    runInterruptibly<V extends Object | number | string | boolean>(): ListenableFuture<V>;
    setValue<V extends Object | number | string | boolean>(value: ListenableFuture<V>): void;
    toPendingString(): string;
}