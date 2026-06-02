import type { AbstractIntIterator } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractIntIterator.d.ts'
import type { IntBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntBidirectionalIterator.d.ts'
export abstract class AbstractIntBidirectionalIterator extends AbstractIntIterator implements IntBidirectionalIterator {
    constructor()
    back(arg0: number): number;
    previous(): number;
    skip(arg0: number): number;
}