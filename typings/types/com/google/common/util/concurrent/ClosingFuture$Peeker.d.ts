import type { ClosingFuture } from '../../../../../com/google/common/util/concurrent/ClosingFuture.d.ts'
import type { ClosingFuture$Combiner$AsyncCombiningCallable } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner$AsyncCombiningCallable.d.ts'
import type { ClosingFuture$Combiner$CombiningCallable } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner$CombiningCallable.d.ts'
import type { ClosingFuture$DeferredCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$DeferredCloser.d.ts'
import type { FluentFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture$Peeker extends Object {
    constructor(arg0: Object[], arg1: () => V)
    // private beingCalled: boolean;
    // private futures: ClosingFuture<Object>[];
    // private call<V extends unknown>(combiner: (param0: ClosingFuture$DeferredCloser, param1: ClosingFuture$Peeker) => V, closeables: { [key: string]: any }): V;
    // private callAsync<V extends unknown>(combiner: (param0: ClosingFuture$DeferredCloser, param1: ClosingFuture$Peeker) => ClosingFuture<V>, closeables: { [key: string]: any }): FluentFuture<V>;
    getDone<D extends unknown>(closingFuture: ClosingFuture<D>): D;
}