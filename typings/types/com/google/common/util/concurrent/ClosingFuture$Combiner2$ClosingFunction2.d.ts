import type { ClosingFuture$DeferredCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$DeferredCloser.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ClosingFuture$Combiner2$ClosingFunction2<V1 extends unknown, V2 extends unknown, U extends unknown> extends Object{
    apply(closer: ClosingFuture$DeferredCloser, value1: V1, value2: V2): U;
}