import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { Object2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractObject2CharSortedMap$ValuesIterator<K extends Object | number | string | boolean> extends Object implements CharIterator {
    constructor(arg0: ObjectBidirectionalIterator<Object2CharMap$Entry<K>>)
    // private i: ObjectBidirectionalIterator<Object2CharMap$Entry<K>>;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): string;
    nextChar(): string;
    skip(arg0: number): number;
}