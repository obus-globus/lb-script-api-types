import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterator.d.ts'
import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractObject2BooleanSortedMap$ValuesIterator<K extends unknown> extends Object implements BooleanIterator {
    constructor(arg0: ObjectBidirectionalIterator<Object2BooleanMap$Entry<K>>)
    // private i: ObjectBidirectionalIterator<Object2BooleanMap$Entry<K>>;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    hasNext(): boolean;
    next(): boolean;
    nextBoolean(): boolean;
    skip(arg0: number): number;
}