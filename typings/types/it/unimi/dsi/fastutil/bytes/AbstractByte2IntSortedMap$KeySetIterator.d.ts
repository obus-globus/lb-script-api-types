import type { Byte2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntMap$Entry.d.ts'
import type { ByteBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteBidirectionalIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractByte2IntSortedMap$KeySetIterator extends Object implements ByteBidirectionalIterator {
    constructor(arg0: ObjectBidirectionalIterator<Byte2IntMap$Entry>)
    // private i: ObjectBidirectionalIterator<Byte2IntMap$Entry>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    skip(arg0: number): number;
}