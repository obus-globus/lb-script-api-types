import type { AbstractShortIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShortIterator.d.ts'
import type { ShortBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortBidirectionalIterator.d.ts'
export abstract class AbstractShortBidirectionalIterator extends AbstractShortIterator implements ShortBidirectionalIterator {
    constructor()
    back(arg0: number): number;
    previous(): number;
    skip(arg0: number): number;
}