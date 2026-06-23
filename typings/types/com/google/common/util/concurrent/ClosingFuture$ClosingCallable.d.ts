import type { ClosingFuture$DeferredCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$DeferredCloser.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ClosingFuture$ClosingCallable<V extends unknown> extends Object{
    call(closer: ClosingFuture$DeferredCloser): V;
}