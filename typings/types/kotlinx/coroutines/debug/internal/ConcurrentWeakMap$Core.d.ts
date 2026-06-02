import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../../kotlin/jvm/functions/Function2.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { HashedWeakRef } from '../../../../kotlinx/coroutines/debug/internal/HashedWeakRef.d.ts'
export class ConcurrentWeakMap$Core extends Object {
    constructor(null_: ConcurrentWeakMap$Core, allocated: number)
    cleanWeakRef(weakRef: HashedWeakRef<Object>): void;
    getImpl<V extends Object | number | string | boolean, K extends Object | number | string | boolean>(key: K): V | null;
    // private index(hash: number): number;
    keyValueIterator(factory: Function2<K, V, E>): Iterator<E>;
    putImpl<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(key: K, value: V | null, weakKey0: HashedWeakRef<K> | null): Object | null;
    rehash(): ConcurrentWeakMap$Core;
    // private removeCleanedAt(index: number): void;
}