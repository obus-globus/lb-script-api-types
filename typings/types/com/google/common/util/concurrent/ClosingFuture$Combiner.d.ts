import type { ClosingFuture } from '../../../../../com/google/common/util/concurrent/ClosingFuture.d.ts'
import type { ClosingFuture$Combiner$AsyncCombiningCallable } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner$AsyncCombiningCallable.d.ts'
import type { ClosingFuture$Combiner$CombiningCallable } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner$CombiningCallable.d.ts'
import type { ClosingFuture$DeferredCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$DeferredCloser.d.ts'
import type { FluentFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture.d.ts'
import type { Futures$FutureCombiner } from '../../../../../com/google/common/util/concurrent/Futures$FutureCombiner.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture$Combiner extends Object {
    private constructor(allMustSucceed: boolean, inputs: ClosingFuture<Object>[])
    // private allMustSucceed: boolean;
    // private closeables: ClosingFuture$CloseableList;
    // private inputs: ClosingFuture<Object>[];
    call(combiningCallable: (param0: V, param1: ClosingFuture$DeferredCloser) => unknown, executor: Executor): ClosingFuture<V>;
    callAsync(combiningCallable: (param0: V, param1: ClosingFuture$DeferredCloser) => com.google.common.util.concurrent.ClosingFuture<unknown>, executor: Executor): ClosingFuture<V>;
    // private futureCombiner(): Futures$FutureCombiner<Object>;
    // private inputFutures(): FluentFuture<Object>[];
}