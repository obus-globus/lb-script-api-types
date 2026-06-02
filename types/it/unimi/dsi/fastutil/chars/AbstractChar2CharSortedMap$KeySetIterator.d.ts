import type { Char2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharMap$Entry.d.ts'
import type { CharBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharBidirectionalIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractChar2CharSortedMap$KeySetIterator extends Object implements CharBidirectionalIterator {
    constructor(arg0: ObjectBidirectionalIterator<Char2CharMap$Entry>)
    // private i: ObjectBidirectionalIterator<Char2CharMap$Entry>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    skip(arg0: number): number;
}