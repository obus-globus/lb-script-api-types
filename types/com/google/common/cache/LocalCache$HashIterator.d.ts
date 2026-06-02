import type { LocalCache$Segment } from '../../../../com/google/common/cache/LocalCache$Segment.d.ts'
import type { LocalCache$WriteThroughEntry } from '../../../../com/google/common/cache/LocalCache$WriteThroughEntry.d.ts'
import type { ReferenceEntry } from '../../../../com/google/common/cache/ReferenceEntry.d.ts'
import type { AtomicReferenceArray } from '../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class LocalCache$HashIterator<T extends Object | number | string | boolean> extends Object implements Iterator<T> {
    constructor(null_: LocalCache$HashIterator<Object>)
    // private currentSegment: LocalCache$Segment<K, V>;
    // private currentTable: AtomicReferenceArray<ReferenceEntry<K, V>>;
    // private lastReturned: LocalCache$WriteThroughEntry;
    // private nextEntry: ReferenceEntry<K, V>;
    // private nextExternal: LocalCache$WriteThroughEntry;
    // private nextSegmentIndex: number;
    // private nextTableIndex: number;
    advance(): void;
    advanceTo(entry: ReferenceEntry<K, V>): boolean;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    nextEntry(): LocalCache$WriteThroughEntry;
    nextInChain(): boolean;
    nextInTable(): boolean;
    remove(): void;
}