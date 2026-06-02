import type { AbstractFuture } from '../../../../../com/google/common/util/concurrent/AbstractFuture.d.ts'
import type { Futures$InCompletionOrderState } from '../../../../../com/google/common/util/concurrent/Futures$InCompletionOrderState.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Futures$InCompletionOrderFuture<T extends Object | number | string | boolean> extends AbstractFuture<T> {
    private constructor(state: Futures$InCompletionOrderState<T>)
    // private state: Futures$InCompletionOrderState<T>;
    afterDone(): void;
    cancel(interruptIfRunning: boolean): boolean;
    pendingToString(): string;
}