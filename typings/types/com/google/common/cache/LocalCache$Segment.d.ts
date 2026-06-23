import type { AbstractCache$StatsCounter } from '../../../../com/google/common/cache/AbstractCache$StatsCounter.d.ts'
import type { CacheLoader } from '../../../../com/google/common/cache/CacheLoader.d.ts'
import type { LocalCache$LoadingValueReference } from '../../../../com/google/common/cache/LocalCache$LoadingValueReference.d.ts'
import type { LocalCache$ValueReference } from '../../../../com/google/common/cache/LocalCache$ValueReference.d.ts'
import type { ReferenceEntry } from '../../../../com/google/common/cache/ReferenceEntry.d.ts'
import type { RemovalCause } from '../../../../com/google/common/cache/RemovalCause.d.ts'
import type { ListenableFuture } from '../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicReferenceArray } from '../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { ReentrantLock } from '../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$Segment<K extends unknown, V extends unknown> extends ReentrantLock {
    constructor(map: Map<K, V>, initialCapacity: number, maxSegmentWeight: number, statsCounter: AbstractCache$StatsCounter)
    // private accessQueue: ReferenceEntry<K, V>[];
    // private count: number;
    // private keyReferenceQueue: ReferenceQueue<K>;
    // private map: Map<K, V>;
    // private maxSegmentWeight: number;
    // private modCount: number;
    // private readCount: AtomicInteger;
    // private recencyQueue: ReferenceEntry<K, V>[];
    // private statsCounter: AbstractCache$StatsCounter;
    // private table: AtomicReferenceArray<ReferenceEntry<K, V>>;
    // private threshold: number;
    // private totalWeight: number;
    // private valueReferenceQueue: ReferenceQueue<V>;
    // private writeQueue: ReferenceEntry<K, V>[];
    cleanUp(): void;
    clear(): void;
    clearKeyReferenceQueue(): void;
    clearReferenceQueues(): void;
    clearValueReferenceQueue(): void;
    compute(key: K, hash: number, function_: (param0: K, param1: V) => V): V;
    containsKey(key: Object, hash: number): boolean;
    containsValue(value: Object): boolean;
    copyEntry(original: ReferenceEntry<K, V>, newNext: ReferenceEntry<K, V>): ReferenceEntry<K, V>;
    drainKeyReferenceQueue(): void;
    drainRecencyQueue(): void;
    drainReferenceQueues(): void;
    drainValueReferenceQueue(): void;
    enqueueNotification(key: K, hash: number, value: V, weight: number, cause: RemovalCause): void;
    evictEntries(newest: ReferenceEntry<K, V>): void;
    expand(): void;
    expireEntries(now: number): void;
    get(key: K, hash: number, loader: CacheLoader<K, V>): V;
    get(key: Object, hash: number): V;
    getAndRecordStats(key: K, hash: number, loadingValueReference: LocalCache$LoadingValueReference<K, V>, newValue: ListenableFuture<V>): V;
    getEntry(key: Object, hash: number): ReferenceEntry<K, V>;
    getFirst(hash: number): ReferenceEntry<K, V>;
    getLiveEntry(key: Object, hash: number, now: number): ReferenceEntry<K, V>;
    getLiveValue(entry: ReferenceEntry<K, V>, now: number): V;
    getNextEvictable(): ReferenceEntry<K, V>;
    initTable(newTable: AtomicReferenceArray<ReferenceEntry<K, V>>): void;
    insertLoadingValueReference(key: K, hash: number, checkTime: boolean): LocalCache$LoadingValueReference<K, V>;
    loadAsync(key: K, hash: number, loadingValueReference: LocalCache$LoadingValueReference<K, V>, loader: CacheLoader<K, V>): ListenableFuture<V>;
    loadSync(key: K, hash: number, loadingValueReference: LocalCache$LoadingValueReference<K, V>, loader: CacheLoader<K, V>): V;
    lockedGetOrLoad(key: K, hash: number, loader: CacheLoader<K, V>): V;
    newEntry(key: K, hash: number, next: ReferenceEntry<K, V>): ReferenceEntry<K, V>;
    newEntryArray(size: number): AtomicReferenceArray<ReferenceEntry<K, V>>;
    postReadCleanup(): void;
    postWriteCleanup(): void;
    preWriteCleanup(now: number): void;
    put(key: K, hash: number, value: V, onlyIfAbsent: boolean): V;
    reclaimKey(entry: ReferenceEntry<K, V>, hash: number): boolean;
    reclaimValue(key: K, hash: number, valueReference: LocalCache$ValueReference<K, V>): boolean;
    recordLockedRead(entry: ReferenceEntry<K, V>, now: number): void;
    recordRead(entry: ReferenceEntry<K, V>, now: number): void;
    recordWrite(entry: ReferenceEntry<K, V>, weight: number, now: number): void;
    refresh(key: K, hash: number, loader: CacheLoader<K, V>, checkTime: boolean): V;
    remove(key: Object, hash: number): V;
    remove(key: Object, hash: number, value: Object): boolean;
    removeCollectedEntry(entry: ReferenceEntry<K, V>): void;
    removeEntry(entry: ReferenceEntry<K, V>, hash: number, cause: RemovalCause): boolean;
    removeEntryFromChain(first: ReferenceEntry<K, V>, entry: ReferenceEntry<K, V>): ReferenceEntry<K, V>;
    removeLoadingValue(key: K, hash: number, valueReference: LocalCache$LoadingValueReference<K, V>): boolean;
    removeValueFromChain(first: ReferenceEntry<K, V>, entry: ReferenceEntry<K, V>, key: K, hash: number, value: V, valueReference: LocalCache$ValueReference<K, V>, cause: RemovalCause): ReferenceEntry<K, V>;
    replace(key: K, hash: number, newValue: V): V;
    replace(key: K, hash: number, oldValue: V, newValue: V): boolean;
    runLockedCleanup(now: number): void;
    runUnlockedCleanup(): void;
    scheduleRefresh(entry: ReferenceEntry<K, V>, key: K, hash: number, oldValue: V, now: number, loader: CacheLoader<K, V>): V;
    setValue(entry: ReferenceEntry<K, V>, key: K, value: V, now: number): void;
    storeLoadedValue(key: K, hash: number, oldValueReference: LocalCache$LoadingValueReference<K, V>, newValue: V): boolean;
    tryDrainReferenceQueues(): void;
    tryExpireEntries(now: number): void;
    waitForLoadingValue(e: ReferenceEntry<K, V>, key: K, valueReference: LocalCache$ValueReference<K, V>): V;
}