import type { AbstractShortBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShortBidirectionalIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export abstract class AbstractShortListIterator extends AbstractShortBidirectionalIterator implements ShortListIterator {
    constructor()
    add(arg0: number): void;
    add(arg0: number): void;
    next(): number;
    previous(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}