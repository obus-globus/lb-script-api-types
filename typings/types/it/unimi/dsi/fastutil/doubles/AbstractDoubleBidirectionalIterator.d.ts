import type { AbstractDoubleIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDoubleIterator.d.ts'
import type { DoubleBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleBidirectionalIterator.d.ts'
export abstract class AbstractDoubleBidirectionalIterator extends AbstractDoubleIterator implements DoubleBidirectionalIterator {
    constructor()
    back(arg0: number): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    skip(arg0: number): number;
}