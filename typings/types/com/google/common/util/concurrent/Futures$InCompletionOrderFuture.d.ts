import type { AbstractFuture } from '../../../../../com/google/common/util/concurrent/AbstractFuture.d.ts'
import type { Futures$InCompletionOrderState } from '../../../../../com/google/common/util/concurrent/Futures$InCompletionOrderState.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Futures$InCompletionOrderFuture<T extends unknown> extends AbstractFuture<T> {
    constructor(arg0: Futures$InCompletionOrderState<Object>, arg1: Future<O>)
    // private state: Futures$InCompletionOrderState<T>;
    afterDone(): void;
    cancel(interruptIfRunning: boolean): boolean;
    pendingToString(): string;
}