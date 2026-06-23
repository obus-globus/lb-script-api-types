import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface AsyncFunction<I extends unknown, O extends unknown> extends Object{
    apply(input: I): ListenableFuture<O>;
}