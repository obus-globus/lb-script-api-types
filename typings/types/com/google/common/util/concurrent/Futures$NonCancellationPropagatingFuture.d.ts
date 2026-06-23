import type { AbstractFuture$TrustedFuture } from '../../../../../com/google/common/util/concurrent/AbstractFuture$TrustedFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Futures$NonCancellationPropagatingFuture<V extends unknown> extends AbstractFuture$TrustedFuture<V> implements Runnable {
    constructor(delegate: ListenableFuture<V>)
    // private delegate: ListenableFuture<V>;
    afterDone(): void;
    pendingToString(): string;
    run(): void;
}