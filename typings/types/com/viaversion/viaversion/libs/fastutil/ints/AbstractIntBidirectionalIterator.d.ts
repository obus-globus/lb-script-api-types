import type { AbstractIntIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/AbstractIntIterator.d.ts'
import type { IntBidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntBidirectionalIterator.d.ts'
export abstract class AbstractIntBidirectionalIterator extends AbstractIntIterator implements IntBidirectionalIterator {
    constructor()
    back(arg0: number): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    skip(arg0: number): number;
}