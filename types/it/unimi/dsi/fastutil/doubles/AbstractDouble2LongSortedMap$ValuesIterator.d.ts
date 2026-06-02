import type { Double2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongMap$Entry.d.ts'
import type { LongConsumer } from '../../../../../it/unimi/dsi/fastutil/longs/LongConsumer.d.ts'
import type { LongIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractDouble2LongSortedMap$ValuesIterator extends Object implements LongIterator {
    constructor(arg0: ObjectBidirectionalIterator<Double2LongMap$Entry>)
    // private i: ObjectBidirectionalIterator<Double2LongMap$Entry>;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextLong(): number;
    skip(arg0: number): number;
}