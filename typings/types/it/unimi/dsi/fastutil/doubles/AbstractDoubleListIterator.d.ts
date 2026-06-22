import type { AbstractDoubleBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDoubleBidirectionalIterator.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
export abstract class AbstractDoubleListIterator extends AbstractDoubleBidirectionalIterator implements DoubleListIterator {
    constructor()
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
}