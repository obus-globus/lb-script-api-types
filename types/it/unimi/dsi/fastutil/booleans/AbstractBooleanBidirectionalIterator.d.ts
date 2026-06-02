import type { AbstractBooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/AbstractBooleanIterator.d.ts'
import type { BooleanBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanBidirectionalIterator.d.ts'
export abstract class AbstractBooleanBidirectionalIterator extends AbstractBooleanIterator implements BooleanBidirectionalIterator {
    constructor()
    back(arg0: number): number;
    previous(): boolean;
    skip(arg0: number): number;
}