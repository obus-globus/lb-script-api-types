import type { LocalCache$StrongEntry } from '../../../../com/google/common/cache/LocalCache$StrongEntry.d.ts'
import type { ReferenceEntry } from '../../../../com/google/common/cache/ReferenceEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$StrongAccessEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends LocalCache$StrongEntry<K, V> {
    constructor(key: K, hash: number, next: ReferenceEntry<K, V>)
    accessTime: number;
    // private nextAccess: ReferenceEntry<K, V>;
    // private previousAccess: ReferenceEntry<K, V>;
    getAccessTime(): number;
    getNextInAccessQueue(): ReferenceEntry<K, V>;
    getPreviousInAccessQueue(): ReferenceEntry<K, V>;
    setAccessTime(time: number): void;
    setNextInAccessQueue(next: ReferenceEntry<K, V>): void;
    setPreviousInAccessQueue(previous: ReferenceEntry<K, V>): void;
}