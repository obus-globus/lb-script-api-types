import type { Stopwatch } from '../../../../com/google/common/base/Stopwatch.d.ts'
import type { CacheLoader } from '../../../../com/google/common/cache/CacheLoader.d.ts'
import type { LocalCache$ValueReference } from '../../../../com/google/common/cache/LocalCache$ValueReference.d.ts'
import type { ReferenceEntry } from '../../../../com/google/common/cache/ReferenceEntry.d.ts'
import type { ListenableFuture } from '../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { SettableFuture } from '../../../../com/google/common/util/concurrent/SettableFuture.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class LocalCache$LoadingValueReference<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements LocalCache$ValueReference<K, V> {
    constructor()
    constructor(oldValue: LocalCache$ValueReference<K, V>)
    // private futureValue: SettableFuture<V>;
    oldValue: LocalCache$ValueReference<K, V>;
    // private stopwatch: Stopwatch;
    compute(key: K, function_: (param0: K, param1: V) => V): V;
    copyFor(queue: ReferenceQueue<V>, value: V, entry: ReferenceEntry<K, V>): LocalCache$ValueReference<K, V>;
    elapsedNanos(): number;
    // private fullyFailedFuture(t: Throwable): ListenableFuture<V>;
    get(): V;
    getEntry(): ReferenceEntry<K, V>;
    getOldValue(): LocalCache$ValueReference<K, V>;
    getWeight(): number;
    isActive(): boolean;
    isLoading(): boolean;
    loadFuture(key: K, loader: CacheLoader<K, V>): ListenableFuture<V>;
    notifyNewValue(newValue: V): void;
    set(newValue: V): boolean;
    setException(t: Throwable): boolean;
    waitForValue(): V;
}