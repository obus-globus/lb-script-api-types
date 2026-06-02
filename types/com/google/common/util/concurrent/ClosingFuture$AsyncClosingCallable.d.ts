import type { ClosingFuture } from '../../../../../com/google/common/util/concurrent/ClosingFuture.d.ts'
import type { ClosingFuture$DeferredCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$DeferredCloser.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ClosingFuture$AsyncClosingCallable<V extends Object | number | string | boolean> extends Object{
    call(closer: ClosingFuture$DeferredCloser): ClosingFuture<V>;
}