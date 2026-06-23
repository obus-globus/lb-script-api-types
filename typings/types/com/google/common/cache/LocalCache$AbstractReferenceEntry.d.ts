import type { LocalCache$ValueReference } from '../../../../com/google/common/cache/LocalCache$ValueReference.d.ts'
import type { ReferenceEntry } from '../../../../com/google/common/cache/ReferenceEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class LocalCache$AbstractReferenceEntry<K extends unknown, V extends unknown> extends Object implements ReferenceEntry<K, V> {
    constructor()
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