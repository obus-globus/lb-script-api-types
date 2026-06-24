import type { CompactHashMap$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class CompactHashMap$Itr<T extends unknown> extends Object implements Iterator<T> {
    private constructor(null_: Map<K, V>)
    constructor(null_: Map<K, V>, arg1: CompactHashMap$1)
    // private currentIndex: number;
    // private expectedMetadata: number;
    // private indexToRemove: number;
    // private checkForConcurrentModification(): void;
    forEachRemaining(arg0: (param0: T) => void): void;
    getOutput(entry: number): T;
    hasNext(): boolean;
    incrementExpectedModCount(): void;
    next(): T;
    remove(): void;
}