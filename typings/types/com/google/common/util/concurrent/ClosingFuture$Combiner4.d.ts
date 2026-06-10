import type { ClosingFuture } from '../../../../../com/google/common/util/concurrent/ClosingFuture.d.ts'
import type { ClosingFuture$Combiner } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner.d.ts'
import type { ClosingFuture$Combiner$AsyncCombiningCallable } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner$AsyncCombiningCallable.d.ts'
import type { ClosingFuture$Combiner$CombiningCallable } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner$CombiningCallable.d.ts'
import type { ClosingFuture$Combiner4$AsyncClosingFunction4 } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner4$AsyncClosingFunction4.d.ts'
import type { ClosingFuture$Combiner4$ClosingFunction4 } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner4$ClosingFunction4.d.ts'
import type { ClosingFuture$DeferredCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$DeferredCloser.d.ts'
import type { ClosingFuture$Peeker } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Peeker.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture$Combiner4<V1 extends Object | number | string | boolean, V2 extends Object | number | string | boolean, V3 extends Object | number | string | boolean, V4 extends Object | number | string | boolean> extends ClosingFuture$Combiner {
    private constructor(future1: ClosingFuture<V1>, future2: ClosingFuture<V2>, future3: ClosingFuture<V3>, future4: ClosingFuture<V4>)
    // private future1: ClosingFuture<V1>;
    // private future2: ClosingFuture<V2>;
    // private future3: ClosingFuture<V3>;
    // private future4: ClosingFuture<V4>;
    call<V extends Object | number | string | boolean>(combiningCallable: (param0: ClosingFuture$DeferredCloser, param1: ClosingFuture$Peeker) => V, executor: Executor): ClosingFuture<V>;
    call<U extends Object | number | string | boolean>(function_: (param0: ClosingFuture$DeferredCloser, param1: V1, param2: V2, param3: V3, param4: V4) => U, executor: Executor): ClosingFuture<U>;
    callAsync<V extends Object | number | string | boolean>(combiningCallable: (param0: ClosingFuture$DeferredCloser, param1: ClosingFuture$Peeker) => ClosingFuture<V>, executor: Executor): ClosingFuture<V>;
    callAsync<U extends Object | number | string | boolean>(function_: (param0: ClosingFuture$DeferredCloser, param1: V1, param2: V2, param3: V3, param4: V4) => ClosingFuture<U>, executor: Executor): ClosingFuture<U>;
}