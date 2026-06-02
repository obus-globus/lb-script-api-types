import type { LocalCache$ValueReference } from '../../../../com/google/common/cache/LocalCache$ValueReference.d.ts'
import type { ReferenceEntry } from '../../../../com/google/common/cache/ReferenceEntry.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$WeakEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends WeakReference<K> implements ReferenceEntry<K, V> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(queue: ReferenceQueue<K>, key: K, hash: number, next: ReferenceEntry<K, V>)
    readonly hash: number;
    readonly next: ReferenceEntry<K, V>;
    valueReference: LocalCache$ValueReference<K, V>;
    getAccessTime(): number;
    getHash(): number;
    getKey(): K;
    getNext(): ReferenceEntry<K, V>;
    getNextInAccessQueue(): ReferenceEntry<K, V>;
    getNextInWriteQueue(): ReferenceEntry<K, V>;
    getPreviousInAccessQueue(): ReferenceEntry<K, V>;
    getPreviousInWriteQueue(): ReferenceEntry<K, V>;
    getValueReference(): LocalCache$ValueReference<K, V>;
    getWriteTime(): number;
    setAccessTime(time: number): void;
    setNextInAccessQueue(next: ReferenceEntry<K, V>): void;
    setNextInWriteQueue(next: ReferenceEntry<K, V>): void;
    setPreviousInAccessQueue(previous: ReferenceEntry<K, V>): void;
    setPreviousInWriteQueue(previous: ReferenceEntry<K, V>): void;
    setValueReference(valueReference: LocalCache$ValueReference<K, V>): void;
    setWriteTime(time: number): void;
}