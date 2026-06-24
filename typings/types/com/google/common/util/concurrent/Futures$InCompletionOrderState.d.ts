import type { Futures$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AbstractFuture } from '../../../../../com/google/common/util/concurrent/AbstractFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { AtomicInteger } from '../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Futures$InCompletionOrderState<T extends unknown> extends Object {
    constructor(arg0: ListenableFuture<Object>[], arg1: Futures$1)
    private constructor(inputFutures: ListenableFuture<T>[])
    // private delegateIndex: number;
    // private incompleteOutputCount: AtomicInteger;
    // private inputFutures: ListenableFuture<T>[];
    // private shouldInterrupt: boolean;
    // private wasCancelled: boolean;
    // private recordCompletion(): void;
    // private recordInputCompletion(delegates: AbstractFuture<T>[], inputFutureIndex: number): void;
    // private recordOutputCancellation(interruptIfRunning: boolean): void;
}