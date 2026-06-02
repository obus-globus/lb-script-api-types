import type { LocalCache$StrongEntry } from '../../../../com/google/common/cache/LocalCache$StrongEntry.d.ts'
import type { ReferenceEntry } from '../../../../com/google/common/cache/ReferenceEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$StrongAccessWriteEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends LocalCache$StrongEntry<K, V> {
    constructor(key: K, hash: number, next: ReferenceEntry<K, V>)
    accessTime: number;
    // private nextAccess: ReferenceEntry<K, V>;
    // private nextWrite: ReferenceEntry<K, V>;
    // private previousAccess: ReferenceEntry<K, V>;
    // private previousWrite: ReferenceEntry<K, V>;
    writeTime: number;
    getAccessTime(): number;
    getNextInAccessQueue(): ReferenceEntry<K, V>;
    getNextInWriteQueue(): ReferenceEntry<K, V>;
    getPreviousInAccessQueue(): ReferenceEntry<K, V>;
    getPreviousInWriteQueue(): ReferenceEntry<K, V>;
    getWriteTime(): number;
    setAccessTime(time: number): void;
    setNextInAccessQueue(next: ReferenceEntry<K, V>): void;
    setNextInWriteQueue(next: ReferenceEntry<K, V>): void;
    setPreviousInAccessQueue(previous: ReferenceEntry<K, V>): void;
    setPreviousInWriteQueue(previous: ReferenceEntry<K, V>): void;
    setWriteTime(time: number): void;
}