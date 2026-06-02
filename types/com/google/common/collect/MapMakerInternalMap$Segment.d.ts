import type { MapMakerInternalMap$InternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$InternalEntry.d.ts'
import type { MapMakerInternalMap$WeakValueReference } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakValueReference.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicReferenceArray } from '../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { ReentrantLock } from '../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class MapMakerInternalMap$Segment<K extends Object | number | string | boolean, V extends Object | number | string | boolean, E extends MapMakerInternalMap$InternalEntry<K, V, E>, S extends MapMakerInternalMap$Segment<K, V, E, S>> extends ReentrantLock {
    constructor(map: Map<K, V>, initialCapacity: number)
    // private count: number;
    // private map: Map<K, V>;
    // private modCount: number;
    // private readCount: AtomicInteger;
    // private table: AtomicReferenceArray<E>;
    // private threshold: number;
    castForTesting(entry: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>): E;
    clear(): void;
    clearReferenceQueue(referenceQueue: ReferenceQueue<T>): void;
    clearValueForTesting(key: K, hash: number, valueReference: MapMakerInternalMap$WeakValueReference<K, V, MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>>): boolean;
    containsKey(key: Object, hash: number): boolean;
    containsValue(value: Object): boolean;
    copyEntry(original: E, newNext: E): E;
    copyForTesting(entry: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>, newNext: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>): E;
    drainKeyReferenceQueue(keyReferenceQueue: ReferenceQueue<K>): void;
    drainValueReferenceQueue(valueReferenceQueue: ReferenceQueue<V>): void;
    expand(): void;
    get(key: Object, hash: number): V;
    getEntry(key: Object, hash: number): E;
    getFirst(hash: number): E;
    getKeyReferenceQueueForTesting(): ReferenceQueue<K>;
    getLiveEntry(key: Object, hash: number): E;
    getLiveValue(entry: E): V;
    getLiveValueForTesting(entry: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>): V;
    getValueReferenceQueueForTesting(): ReferenceQueue<V>;
    getWeakValueReferenceForTesting(entry: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>): MapMakerInternalMap$WeakValueReference<K, V, E>;
    initTable(newTable: AtomicReferenceArray<E>): void;
    maybeClearReferenceQueues(): void;
    maybeDrainReferenceQueues(): void;
    newEntryArray(size: number): AtomicReferenceArray<E>;
    newEntryForTesting(key: K, hash: number, next: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>): E;
    newWeakValueReferenceForTesting(entry: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>, value: V): MapMakerInternalMap$WeakValueReference<K, V, E>;
    postReadCleanup(): void;
    preWriteCleanup(): void;
    put(key: K, hash: number, value: V, onlyIfAbsent: boolean): V;
    reclaimKey(entry: E, hash: number): boolean;
    reclaimValue(key: K, hash: number, valueReference: MapMakerInternalMap$WeakValueReference<K, V, E>): boolean;
    remove(key: Object, hash: number): V;
    remove(key: Object, hash: number, value: Object): boolean;
    removeEntryForTesting(entry: E): boolean;
    removeFromChain(first: E, entry: E): E;
    removeFromChainForTesting(first: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>, entry: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>): E;
    removeTableEntryForTesting(entry: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>): boolean;
    replace(key: K, hash: number, newValue: V): V;
    replace(key: K, hash: number, oldValue: V, newValue: V): boolean;
    runCleanup(): void;
    runLockedCleanup(): void;
    self(): S;
    setTableEntryForTesting(i: number, entry: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>): void;
    setValue(entry: E, value: V): void;
    setValueForTesting(entry: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>, value: V): void;
    setWeakValueReferenceForTesting(entry: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>, valueReference: MapMakerInternalMap$WeakValueReference<K, V, MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>>): void;
    tryDrainReferenceQueues(): void;
}