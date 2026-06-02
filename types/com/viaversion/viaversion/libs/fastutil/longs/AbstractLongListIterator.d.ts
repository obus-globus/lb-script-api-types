import type { AbstractLongBidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/AbstractLongBidirectionalIterator.d.ts'
import type { LongListIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongListIterator.d.ts'
export abstract class AbstractLongListIterator extends AbstractLongBidirectionalIterator implements LongListIterator {
    constructor()
    add(arg0: number): void;
    add(arg0: number): void;
    next(): number;
    previous(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}