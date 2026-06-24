import type { CombinedFuture } from '../../../../../com/google/common/util/concurrent/CombinedFuture.d.ts'
import type { InterruptibleTask } from '../../../../../com/google/common/util/concurrent/InterruptibleTask.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class CombinedFuture$CombinedFutureInterruptibleTask<T extends unknown> extends InterruptibleTask<T> {
    constructor(null_: CombinedFuture<V>, listenerExecutor: Executor)
    // private listenerExecutor: Executor;
    afterRanInterruptiblyFailure(error: Throwable): void;
    afterRanInterruptiblySuccess(result: T): void;
    execute(): void;
    isDone(): boolean;
    setValue(value: T): void;
}