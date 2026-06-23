import type { LocalCache$AbstractReferenceEntry } from '../../../../com/google/common/cache/LocalCache$AbstractReferenceEntry.d.ts'
import type { LocalCache$ValueReference } from '../../../../com/google/common/cache/LocalCache$ValueReference.d.ts'
import type { ReferenceEntry } from '../../../../com/google/common/cache/ReferenceEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$StrongEntry<K extends unknown, V extends unknown> extends LocalCache$AbstractReferenceEntry<K, V> {
    constructor(key: K, hash: number, next: ReferenceEntry<K, V>)
    readonly hash: number;
    readonly key: K;
    readonly next: ReferenceEntry<K, V>;
    valueReference: LocalCache$ValueReference<K, V>;
    getHash(): number;
    getKey(): K;
    getNext(): ReferenceEntry<K, V>;
    getValueReference(): LocalCache$ValueReference<K, V>;
    setValueReference(valueReference: LocalCache$ValueReference<K, V>): void;
}