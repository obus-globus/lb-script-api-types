import type { AbstractFuture$TrustedFuture } from '../../../../../com/google/common/util/concurrent/AbstractFuture$TrustedFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ImmediateFuture$ImmediateFailedFuture<V extends unknown> extends AbstractFuture$TrustedFuture<V> {
    constructor(thrown: Throwable)
}