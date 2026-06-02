import type { ClosingFuture } from '../../../../../com/google/common/util/concurrent/ClosingFuture.d.ts'
import type { ClosingFuture$Combiner } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner.d.ts'
import type { ClosingFuture$Combiner3$AsyncClosingFunction3 } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner3$AsyncClosingFunction3.d.ts'
import type { ClosingFuture$Combiner3$ClosingFunction3 } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner3$ClosingFunction3.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture$Combiner3<V1 extends Object | number | string | boolean, V2 extends Object | number | string | boolean, V3 extends Object | number | string | boolean> extends ClosingFuture$Combiner {
    private constructor(future1: ClosingFuture<V1>, future2: ClosingFuture<V2>, future3: ClosingFuture<V3>)
    // private future1: ClosingFuture<V1>;
    // private future2: ClosingFuture<V2>;
    // private future3: ClosingFuture<V3>;
    call(function_: (param0: V1, param1: V2, param2: V3, param3: U) => unknown, executor: Executor): ClosingFuture<U>;
    callAsync(function_: (param0: V1, param1: V2, param2: V3, param3: U) => com.google.common.util.concurrent.ClosingFuture<unknown>, executor: Executor): ClosingFuture<U>;
}