import type { ClosingFuture } from '../../../../../com/google/common/util/concurrent/ClosingFuture.d.ts'
import type { ClosingFuture$Combiner } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner.d.ts'
import type { ClosingFuture$Combiner$AsyncCombiningCallable } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner$AsyncCombiningCallable.d.ts'
import type { ClosingFuture$Combiner$CombiningCallable } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner$CombiningCallable.d.ts'
import type { ClosingFuture$Combiner5$AsyncClosingFunction5 } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner5$AsyncClosingFunction5.d.ts'
import type { ClosingFuture$Combiner5$ClosingFunction5 } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner5$ClosingFunction5.d.ts'
import type { ClosingFuture$DeferredCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$DeferredCloser.d.ts'
import type { ClosingFuture$Peeker } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Peeker.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture$Combiner5<V1 extends Object | number | string | boolean, V2 extends Object | number | string | boolean, V3 extends Object | number | string | boolean, V4 extends Object | number | string | boolean, V5 extends Object | number | string | boolean> extends ClosingFuture$Combiner {
    private constructor(future1: ClosingFuture<V1>, future2: ClosingFuture<V2>, future3: ClosingFuture<V3>, future4: ClosingFuture<V4>, future5: ClosingFuture<V5>)
    // private future1: ClosingFuture<V1>;
    // private future2: ClosingFuture<V2>;
    // private future3: ClosingFuture<V3>;
    // private future4: ClosingFuture<V4>;
    // private future5: ClosingFuture<V5>;
    call<V extends Object | number | string | boolean>(combiningCallable: (param0: ClosingFuture$DeferredCloser, param1: ClosingFuture$Peeker) => V, executor: Executor): ClosingFuture<V>;
    call<U extends Object | number | string | boolean>(function_: (param0: ClosingFuture$DeferredCloser, param1: V1, param2: V2, param3: V3, param4: V4, param5: V5) => U, executor: Executor): ClosingFuture<U>;
    callAsync<V extends Object | number | string | boolean>(combiningCallable: (param0: ClosingFuture$DeferredCloser, param1: ClosingFuture$Peeker) => ClosingFuture<V>, executor: Executor): ClosingFuture<V>;
    callAsync<U extends Object | number | string | boolean>(function_: (param0: ClosingFuture$DeferredCloser, param1: V1, param2: V2, param3: V3, param4: V4, param5: V5) => ClosingFuture<U>, executor: Executor): ClosingFuture<U>;
}