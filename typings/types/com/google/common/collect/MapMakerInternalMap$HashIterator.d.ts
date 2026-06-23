import type { MapMakerInternalMap$InternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$InternalEntry.d.ts'
import type { MapMakerInternalMap$Segment } from '../../../../com/google/common/collect/MapMakerInternalMap$Segment.d.ts'
import type { MapMakerInternalMap$WriteThroughEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$WriteThroughEntry.d.ts'
import type { AtomicReferenceArray } from '../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class MapMakerInternalMap$HashIterator<T extends unknown> extends Object implements Iterator<T> {
    constructor(null_: MapMakerInternalMap$HashIterator<Object>)
    // private currentSegment: MapMakerInternalMap$Segment<K, V, E, S>;
    // private currentTable: AtomicReferenceArray<E>;
    // private lastReturned: MapMakerInternalMap$WriteThroughEntry;
    // private nextEntry: E;
    // private nextExternal: MapMakerInternalMap$WriteThroughEntry;
    // private nextSegmentIndex: number;
    // private nextTableIndex: number;
    advance(): void;
    advanceTo<E extends MapMakerInternalMap$InternalEntry<K, V, E>>(entry: E): boolean;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    nextEntry<K extends unknown, V extends unknown, E extends MapMakerInternalMap$InternalEntry<K, V, E>, S extends MapMakerInternalMap$Segment<K, V, E, S>>(): MapMakerInternalMap$WriteThroughEntry;
    nextInChain(): boolean;
    nextInTable(): boolean;
    remove(): void;
}