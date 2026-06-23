import type { ClosingFuture } from '../../../../../com/google/common/util/concurrent/ClosingFuture.d.ts'
import type { ClosingFuture$DeferredCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$DeferredCloser.d.ts'
import type { ClosingFuture$Peeker } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Peeker.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ClosingFuture$Combiner$AsyncCombiningCallable<V extends unknown> extends Object{
    call(closer: ClosingFuture$DeferredCloser, peeker: ClosingFuture$Peeker): ClosingFuture<V>;
}