import type { ClosingFuture$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ClosingFuture } from '../../../../../com/google/common/util/concurrent/ClosingFuture.d.ts'
import type { ClosingFuture$Combiner } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner.d.ts'
import type { ClosingFuture$Combiner$AsyncCombiningCallable } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner$AsyncCombiningCallable.d.ts'
import type { ClosingFuture$Combiner$CombiningCallable } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner$CombiningCallable.d.ts'
import type { ClosingFuture$Combiner3$AsyncClosingFunction3 } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner3$AsyncClosingFunction3.d.ts'
import type { ClosingFuture$Combiner3$ClosingFunction3 } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner3$ClosingFunction3.d.ts'
import type { ClosingFuture$DeferredCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$DeferredCloser.d.ts'
import type { ClosingFuture$Peeker } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Peeker.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture$Combiner3<V1 extends unknown, V2 extends unknown, V3 extends unknown> extends ClosingFuture$Combiner {
    constructor(arg0: ClosingFuture<Object>, arg1: ClosingFuture<Object>, arg2: ClosingFuture<Object>, arg3: ClosingFuture$1)
    private constructor(future1: ClosingFuture<V1>, future2: ClosingFuture<V2>, future3: ClosingFuture<V3>)
    // private future1: ClosingFuture<V1>;
    // private future2: ClosingFuture<V2>;
    // private future3: ClosingFuture<V3>;
    call<V extends unknown>(combiningCallable: (param0: ClosingFuture$DeferredCloser, param1: ClosingFuture$Peeker) => V, executor: Executor): ClosingFuture<V>;
    call<U extends unknown>(function_: (param0: ClosingFuture$DeferredCloser, param1: V1, param2: V2, param3: V3) => U, executor: Executor): ClosingFuture<U>;
    callAsync<V extends unknown>(combiningCallable: (param0: ClosingFuture$DeferredCloser, param1: ClosingFuture$Peeker) => ClosingFuture<V>, executor: Executor): ClosingFuture<V>;
    callAsync<U extends unknown>(function_: (param0: ClosingFuture$DeferredCloser, param1: V1, param2: V2, param3: V3) => ClosingFuture<U>, executor: Executor): ClosingFuture<U>;
}