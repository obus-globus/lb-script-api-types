import type { BidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/BidirectionalIterator.d.ts'
import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ObjectBidirectionalIterator<K extends unknown> extends BidirectionalIterator<K>, ObjectIterator<K>, Object{
    back(arg0: number): number;
    skip(arg0: number): number;
}