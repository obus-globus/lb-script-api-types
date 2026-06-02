import type { Char2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectMap$Entry.d.ts'
import type { CharBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharBidirectionalIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractChar2ObjectSortedMap$KeySetIterator<V extends Object | number | string | boolean> extends Object implements CharBidirectionalIterator {
    constructor(arg0: ObjectBidirectionalIterator<Char2ObjectMap$Entry<V>>)
    // private i: ObjectBidirectionalIterator<Char2ObjectMap$Entry<V>>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    skip(arg0: number): number;
}