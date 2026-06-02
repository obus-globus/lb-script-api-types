import type { AbstractLongIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/AbstractLongIterator.d.ts'
import type { LongBidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongBidirectionalIterator.d.ts'
export abstract class AbstractLongBidirectionalIterator extends AbstractLongIterator implements LongBidirectionalIterator {
    constructor()
    back(arg0: number): number;
    previous(): number;
    skip(arg0: number): number;
}