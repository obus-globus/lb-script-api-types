import type { LocalCache$WeakEntry } from '../../../../com/google/common/cache/LocalCache$WeakEntry.d.ts'
import type { ReferenceEntry } from '../../../../com/google/common/cache/ReferenceEntry.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$WeakWriteEntry<K extends unknown, V extends unknown> extends LocalCache$WeakEntry<K, V> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(queue: ReferenceQueue<K>, key: K, hash: number, next: ReferenceEntry<K, V>)
    // private nextWrite: ReferenceEntry<K, V>;
    // private previousWrite: ReferenceEntry<K, V>;
    writeTime: number;
    getNextInWriteQueue(): ReferenceEntry<K, V>;
    getPreviousInWriteQueue(): ReferenceEntry<K, V>;
    getWriteTime(): number;
    setNextInWriteQueue(next: ReferenceEntry<K, V>): void;
    setPreviousInWriteQueue(previous: ReferenceEntry<K, V>): void;
    setWriteTime(time: number): void;
}