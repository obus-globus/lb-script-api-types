import type { AbstractLongBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLongBidirectionalIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export abstract class AbstractLongListIterator extends AbstractLongBidirectionalIterator implements LongListIterator {
    constructor()
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}