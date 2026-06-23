import type { AbstractFuture } from '../../../../../com/google/common/util/concurrent/AbstractFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractFuture$DelegatingToFuture<V extends unknown> extends Object implements Runnable {
    constructor(owner: AbstractFuture<V>, future: ListenableFuture<V>)
    // private future: ListenableFuture<V>;
    // private owner: AbstractFuture<V>;
    run(): void;
}