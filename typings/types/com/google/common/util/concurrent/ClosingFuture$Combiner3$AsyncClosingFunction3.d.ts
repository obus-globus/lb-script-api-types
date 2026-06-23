import type { ClosingFuture } from '../../../../../com/google/common/util/concurrent/ClosingFuture.d.ts'
import type { ClosingFuture$DeferredCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$DeferredCloser.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ClosingFuture$Combiner3$AsyncClosingFunction3<V1 extends unknown, V2 extends unknown, V3 extends unknown, U extends unknown> extends Object{
    apply(closer: ClosingFuture$DeferredCloser, value1: V1, value2: V2, value3: V3): ClosingFuture<U>;
}