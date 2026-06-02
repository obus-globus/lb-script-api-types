import type { AbstractIntBidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/AbstractIntBidirectionalIterator.d.ts'
import type { IntListIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntListIterator.d.ts'
export abstract class AbstractIntListIterator extends AbstractIntBidirectionalIterator implements IntListIterator {
    constructor()
    add(arg0: number): void;
    add(arg0: number): void;
    next(): number;
    previous(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}