import type { Futures$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AsyncCallable } from '../../../../../com/google/common/util/concurrent/AsyncCallable.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Futures$FutureCombiner<V extends unknown> extends Object {
    constructor(arg0: boolean, arg1: Object[], arg2: Futures$1)
    private constructor(allMustSucceed: boolean, futures: ListenableFuture<V>[])
    // private allMustSucceed: boolean;
    // private futures: ListenableFuture<V>[];
    call<C extends unknown>(combiner: () => C, executor: Executor): ListenableFuture<C>;
    callAsync<C extends unknown>(combiner: () => ListenableFuture<C>, executor: Executor): ListenableFuture<C>;
    run(combiner: () => void, executor: Executor): ListenableFuture<Object>;
}