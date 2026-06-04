import type { AbstractShortBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShortBidirectionalIterator.d.ts'
import type { ShortBigListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortBigListIterator.d.ts'
export abstract class AbstractShortBigListIterator extends AbstractShortBidirectionalIterator implements ShortBigListIterator {
    constructor()
    add(arg0: number): void;
    back(arg0: number): number;
    set(arg0: number): void;
    skip(arg0: number): number;
}