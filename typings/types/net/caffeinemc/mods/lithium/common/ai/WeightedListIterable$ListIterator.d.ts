import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
import type { ShufflingList$WeightedEntry } from '../../../../../../net/minecraft/world/entity/ai/behavior/ShufflingList$WeightedEntry.d.ts'
export class WeightedListIterable$ListIterator<U extends Object | number | string | boolean> extends Object implements Iterator<U> {
    constructor(arg0: Iterator<ShufflingList$WeightedEntry<U>>)
    // private inner: Iterator<ShufflingList$WeightedEntry<U>>;
    forEachRemaining(arg0: (param0: U) => void): void;
    hasNext(): boolean;
    next(): U;
}