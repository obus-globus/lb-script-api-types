import type { Byte2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatMap$Entry.d.ts'
import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractByte2FloatSortedMap$ValuesIterator extends Object implements FloatIterator {
    constructor(arg0: ObjectBidirectionalIterator<Byte2FloatMap$Entry>)
    // private i: ObjectBidirectionalIterator<Byte2FloatMap$Entry>;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextFloat(): number;
    skip(arg0: number): number;
}