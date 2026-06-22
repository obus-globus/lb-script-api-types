import type { AbstractFloatBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloatBidirectionalIterator.d.ts'
import type { FloatBigListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBigListIterator.d.ts'
export abstract class AbstractFloatBigListIterator extends AbstractFloatBidirectionalIterator implements FloatBigListIterator {
    constructor()
    add(arg0: number): void;
    back(arg0: number): number;
    nextFloat(): number;
    previousFloat(): number;
    set(arg0: number): void;
    skip(arg0: number): number;
}