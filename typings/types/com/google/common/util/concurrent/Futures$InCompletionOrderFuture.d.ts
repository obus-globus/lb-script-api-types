import type { Futures$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AbstractFuture } from '../../../../../com/google/common/util/concurrent/AbstractFuture.d.ts'
import type { Futures$InCompletionOrderState } from '../../../../../com/google/common/util/concurrent/Futures$InCompletionOrderState.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Futures$InCompletionOrderFuture<T extends unknown> extends AbstractFuture<T> {
    constructor(arg0: Futures$InCompletionOrderState<Object>, arg1: Futures$1)
    private constructor(state: Futures$InCompletionOrderState<T>)
    // private state: Futures$InCompletionOrderState<T>;
    afterDone(): void;
    cancel(interruptIfRunning: boolean): boolean;
    pendingToString(): string;
}