import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractFutureProxy } from '../../../../../org/apache/commons/lang3/concurrent/AbstractFutureProxy.d.ts'
import type { UncheckedFuture } from '../../../../../org/apache/commons/lang3/concurrent/UncheckedFuture.d.ts'
export class UncheckedFutureImpl<V extends unknown> extends AbstractFutureProxy<V> implements UncheckedFuture<V> {
    static map(paramarg0: Future<Object>[]): Stream<UncheckedFuture<Object>>;
    static on(paramarg0: Future<Object>[]): UncheckedFuture<Object>[];
    static on(paramarg0: Future<Object>): UncheckedFuture<Object>;
    constructor(arg0: Future<V>)
    get(): V;
    get(arg0: number, arg1: TimeUnit): V;
}