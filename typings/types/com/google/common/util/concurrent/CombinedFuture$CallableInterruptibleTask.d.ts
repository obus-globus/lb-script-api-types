import type { CombinedFuture } from '../../../../../com/google/common/util/concurrent/CombinedFuture.d.ts'
import type { CombinedFuture$CombinedFutureInterruptibleTask } from '../../../../../com/google/common/util/concurrent/CombinedFuture$CombinedFutureInterruptibleTask.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CombinedFuture$CallableInterruptibleTask extends CombinedFuture$CombinedFutureInterruptibleTask<Object> {
    constructor(null_: CombinedFuture<Object>, callable: () => Object, listenerExecutor: Executor)
    // private callable: () => V;
    runInterruptibly<V extends unknown>(): V;
    setValue<V extends unknown>(value: V): void;
    toPendingString(): string;
}