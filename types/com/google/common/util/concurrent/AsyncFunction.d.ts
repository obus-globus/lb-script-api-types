import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface AsyncFunction<I extends Object | number | string | boolean, O extends Object | number | string | boolean> extends Object{
    apply(input: I): ListenableFuture<O>;
}