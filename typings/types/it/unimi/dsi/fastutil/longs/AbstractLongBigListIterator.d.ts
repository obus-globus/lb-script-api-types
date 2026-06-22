import type { AbstractLongBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLongBidirectionalIterator.d.ts'
import type { LongBigListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongBigListIterator.d.ts'
export abstract class AbstractLongBigListIterator extends AbstractLongBidirectionalIterator implements LongBigListIterator {
    constructor()
    add(arg0: number): void;
    back(arg0: number): number;
    nextLong(): number;
    previousLong(): number;
    set(arg0: number): void;
    skip(arg0: number): number;
}