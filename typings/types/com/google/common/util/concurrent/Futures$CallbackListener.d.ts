import type { FutureCallback } from '../../../../../com/google/common/util/concurrent/FutureCallback.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Futures$CallbackListener<V extends unknown> extends Object implements Runnable {
    constructor(future: ListenableFuture<V>, callback: FutureCallback<V>)
    // private callback: FutureCallback<V>;
    // private future: ListenableFuture<V>;
    run(): void;
    toString(): string;
}