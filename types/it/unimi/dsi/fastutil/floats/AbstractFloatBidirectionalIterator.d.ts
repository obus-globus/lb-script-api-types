import type { AbstractFloatIterator } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloatIterator.d.ts'
import type { FloatBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBidirectionalIterator.d.ts'
export abstract class AbstractFloatBidirectionalIterator extends AbstractFloatIterator implements FloatBidirectionalIterator {
    constructor()
    back(arg0: number): number;
    previous(): number;
    skip(arg0: number): number;
}