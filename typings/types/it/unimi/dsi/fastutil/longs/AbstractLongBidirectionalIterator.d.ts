import type { AbstractLongIterator } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLongIterator.d.ts'
import type { LongBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongBidirectionalIterator.d.ts'
export abstract class AbstractLongBidirectionalIterator extends AbstractLongIterator implements LongBidirectionalIterator {
    constructor()
    back(arg0: number): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    skip(arg0: number): number;
}