import type { ClosingFuture } from '../../../../../com/google/common/util/concurrent/ClosingFuture.d.ts'
import type { ClosingFuture$DeferredCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$DeferredCloser.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ClosingFuture$Combiner4$AsyncClosingFunction4<V1 extends Object | number | string | boolean, V2 extends Object | number | string | boolean, V3 extends Object | number | string | boolean, V4 extends Object | number | string | boolean, U extends Object | number | string | boolean> extends Object{
    apply(closer: ClosingFuture$DeferredCloser, value1: V1, value2: V2, value3: V3, value4: V4): ClosingFuture<U>;
}