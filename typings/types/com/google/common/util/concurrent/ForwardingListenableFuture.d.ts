import type { ForwardingFuture } from '../../../../../com/google/common/util/concurrent/ForwardingFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ForwardingListenableFuture<V extends unknown> extends ForwardingFuture<V> implements ListenableFuture<V> {
    constructor()
    addListener(listener: () => void, exec: Executor): void;
    delegate(): ListenableFuture<V>;
}