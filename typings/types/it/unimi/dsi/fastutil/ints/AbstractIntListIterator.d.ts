import type { AbstractIntBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractIntBidirectionalIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export abstract class AbstractIntListIterator extends AbstractIntBidirectionalIterator implements IntListIterator {
    constructor()
    add(arg0: number): void;
    next(): number;
    previous(): number;
    remove(): void;
    set(arg0: number): void;
}