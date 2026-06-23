import type { AbstractFuture$TrustedFuture } from '../../../../../com/google/common/util/concurrent/AbstractFuture$TrustedFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class SettableFuture<V extends unknown> extends AbstractFuture$TrustedFuture<V> {
    static create(): SettableFuture<Object>;
    private constructor()
    set(value: V): boolean;
    setException(throwable: Throwable): boolean;
    setFuture(future: ListenableFuture<V>): boolean;
}