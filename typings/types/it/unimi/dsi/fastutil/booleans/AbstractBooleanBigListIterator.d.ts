import type { AbstractBooleanBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/AbstractBooleanBidirectionalIterator.d.ts'
import type { BooleanBigListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanBigListIterator.d.ts'
export abstract class AbstractBooleanBigListIterator extends AbstractBooleanBidirectionalIterator implements BooleanBigListIterator {
    constructor()
    add(arg0: boolean): void;
    back(arg0: number): number;
    set(arg0: boolean): void;
    skip(arg0: number): number;
}