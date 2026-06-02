import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface AsyncCallable<V extends Object | number | string | boolean> extends Object{
    call(): ListenableFuture<V>;
}