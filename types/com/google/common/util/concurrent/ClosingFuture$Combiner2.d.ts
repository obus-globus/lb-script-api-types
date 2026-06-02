import type { ClosingFuture } from '../../../../../com/google/common/util/concurrent/ClosingFuture.d.ts'
import type { ClosingFuture$Combiner } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner.d.ts'
import type { ClosingFuture$Combiner2$AsyncClosingFunction2 } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner2$AsyncClosingFunction2.d.ts'
import type { ClosingFuture$Combiner2$ClosingFunction2 } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner2$ClosingFunction2.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture$Combiner2<V1 extends Object | number | string | boolean, V2 extends Object | number | string | boolean> extends ClosingFuture$Combiner {
    private constructor(future1: ClosingFuture<V1>, future2: ClosingFuture<V2>)
    // private future1: ClosingFuture<V1>;
    // private future2: ClosingFuture<V2>;
    call(function_: (param0: V1, param1: V2, param2: U) => unknown, executor: Executor): ClosingFuture<U>;
    callAsync(function_: (param0: V1, param1: V2, param2: U) => com.google.common.util.concurrent.ClosingFuture<unknown>, executor: Executor): ClosingFuture<U>;
}