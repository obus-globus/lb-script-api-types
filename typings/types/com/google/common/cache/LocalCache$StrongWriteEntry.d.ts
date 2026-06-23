import type { LocalCache$StrongEntry } from '../../../../com/google/common/cache/LocalCache$StrongEntry.d.ts'
import type { ReferenceEntry } from '../../../../com/google/common/cache/ReferenceEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$StrongWriteEntry<K extends unknown, V extends unknown> extends LocalCache$StrongEntry<K, V> {
    constructor(key: K, hash: number, next: ReferenceEntry<K, V>)
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