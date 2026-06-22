import type { AbstractDoubleBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDoubleBidirectionalIterator.d.ts'
import type { DoubleBigListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleBigListIterator.d.ts'
export abstract class AbstractDoubleBigListIterator extends AbstractDoubleBidirectionalIterator implements DoubleBigListIterator {
    constructor()
    add(arg0: number): void;
    back(arg0: number): number;
    nextDouble(): number;
    previousDouble(): number;
    set(arg0: number): void;
    skip(arg0: number): number;
}