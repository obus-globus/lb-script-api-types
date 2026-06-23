import type { ClosingFuture$DeferredCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$DeferredCloser.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ClosingFuture$ClosingFunction<T extends unknown, U extends unknown> extends Object{
    apply(closer: ClosingFuture$DeferredCloser, input: T): U;
}