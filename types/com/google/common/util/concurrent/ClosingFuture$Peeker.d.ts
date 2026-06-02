import type { ClosingFuture } from '../../../../../com/google/common/util/concurrent/ClosingFuture.d.ts'
import type { ClosingFuture$Combiner$AsyncCombiningCallable } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner$AsyncCombiningCallable.d.ts'
import type { ClosingFuture$Combiner$CombiningCallable } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner$CombiningCallable.d.ts'
import type { ClosingFuture$DeferredCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$DeferredCloser.d.ts'
import type { FluentFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture$Peeker extends Object {
    private constructor(futures: ClosingFuture<Object>[])
    // private beingCalled: boolean;
    // private futures: ClosingFuture<Object>[];
    // private call<V extends Object | number | string | boolean>(combiner: (param0: V, param1: ClosingFuture$DeferredCloser) => unknown, closeables: ClosingFuture$CloseableList): V;
    // private callAsync(combiner: (param0: V, param1: ClosingFuture$DeferredCloser) => com.google.common.util.concurrent.ClosingFuture<unknown>, closeables: ClosingFuture$CloseableList): FluentFuture<V>;
    getDone<D extends Object | number | string | boolean>(closingFuture: ClosingFuture<D>): D;
}